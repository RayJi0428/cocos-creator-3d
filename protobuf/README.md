# hello-world
Hello world new project template.

生成proto.ts:
在tools\compile-proto路徑下執行 npm install 建立相關node_modules
修改package.json指定proto檔名
compile-proto\wrap-pbjs.js, compile-proto\wrap-pbts.js 也要調整內部名稱及路徑
在tools\compile-proto路徑下執行 npm run build-proto 生成proto.ts