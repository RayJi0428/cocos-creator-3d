import os #path
import subprocess #cmd line
import sys #取得丟入檔案
import re #正則
import json #JSON
proto_list = sys.argv[1:]

if len(proto_list) == 0:
    #找到所有proto檔
    proto_list = [os.path.abspath('../../protos/' + x) for x in os.listdir('../../protos')]

for proto in proto_list:
    print(proto)
input('\n任意鍵開始生成proto靜態檔')

#寫檔-------------------------------------------------------
def writeFile(path, data):
    package_json_file = open(path, 'w', encoding="utf-8")
    package_json_file.write(data)
    package_json_file.close()
    print('生成 ' + path)

for proto in proto_list:
    #.proto
    #python腳本預設編碼問題，所以讀取檔案要備註UTf-8
    #https://oxygentw.net/blog/computer/python-file-utf8-encoding/
    file_name = os.path.basename(proto) #檔名 Protocol.Game.Shared.proto
    file_prefix = os.path.splitext(file_name)[0] #前綴字 Protocol.Game.Shared
    proto_file = open(proto, 'r', encoding="utf-8")
    proto_data = proto_file.read()
    proto_package = re.search('package .+;', proto_data).group() #找出第一個符合字串
    proto_package = proto_package.split(' ')[1].split('.')[0] #js外層package名稱

    #package.json
    package_json_temp_file = open('./package_template.json', 'r', encoding="utf-8")
    package_json_string = package_json_temp_file.read()
    package_json = json.loads(package_json_string)
    pbjs = package_json['scripts']['build-proto:pbjs']
    pbjs = re.sub('#file_prefix#', file_prefix, pbjs)
    package_json['scripts']['build-proto:pbjs'] = pbjs

    pbts = package_json['scripts']['build-proto:pbts']
    pbts = re.sub('#file_prefix#', file_prefix, pbts)
    package_json['scripts']['build-proto:pbts'] = pbts
    package_json_string = json.dumps(package_json)

    #寫檔
    package_json_file_path = './package.json'
    writeFile(package_json_file_path, package_json_string)

    #wrap-pbjs.js
    wrap_pbjs_template_file = open('./wrap-pbjs_template.js', 'r', encoding="utf-8")
    wrap_pbjs_string = wrap_pbjs_template_file.read()
    wrap_pbjs_string = re.sub('#proto_package#', proto_package, wrap_pbjs_string)

    #寫檔
    wrap_pbjs_file_path = './wrap-pbjs.js'
    writeFile(wrap_pbjs_file_path, wrap_pbjs_string)

    #wrap-pbts.js
    wrap_pbts_template_file = open('./wrap-pbts_template.js', 'r', encoding="utf-8")
    wrap_pbts_string = wrap_pbts_template_file.read()
    wrap_pbts_string = re.sub('#file_prefix#', file_prefix, wrap_pbts_string)

    #寫檔
    wrap_pbts_file_path = './wrap-pbts.js'
    writeFile(wrap_pbts_file_path, wrap_pbts_string)

    #產生proto靜態文件
    print('生成 proto靜態檔')
    return_code = subprocess.call("npm run build-proto", shell=True)
    print(return_code)

    #刪除暫存檔
    os.remove(package_json_file_path)
    os.remove(wrap_pbjs_file_path)
    os.remove(wrap_pbts_file_path)

    print('刪除暫存檔')