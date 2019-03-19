/**
 * 小肥牛扫码点餐项目API子系统
 */
const PORT = 8090;
const express = require("express");
//启动主服务器   可以npm start  也可以 node ./index.js
const app = express();
app.listen(PORT,()=>{
  console.log('Server Listening '+PORT+' ...')
})