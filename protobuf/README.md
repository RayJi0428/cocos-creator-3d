# hello-world
Hello world new project template.

準備第三方插件 protobuf.js, long.js:
https://github.com/cocos-creator/example-3d
從 protobuf 範例複製 assets/thirdy 到專案內
將 long.js 勾選導入為插件
將 protobuf.js 勾選導入為插件，並依賴 long.js

生成proto.ts:
在 tools\compile-proto 路徑下執行 npm install 建立相關 node_modules
修改 package.json 指定 proto 檔名
compile-proto\wrap-pbjs.js, compile-proto\wrap-pbts.js 也要調整內部名稱及路徑
在 tools\compile-proto 路徑下執行 npm run build-proto 生成 xxx_proto.ts, xxx_proto.js
將 xxx_proto.js 勾選導入為插件，並依賴 protobuf.js