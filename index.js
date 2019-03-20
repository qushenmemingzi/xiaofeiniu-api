/**
 * 小肥牛扫码点餐项目API子系统
 */
const PORT = 8090;
const express = require("express");
//cors是通过修改响应消息头的方式允许当前客户端跨域访问
const cors = require("cors")
const bodyParser = require("body-parser")
const categoryRouter = require("./routes/admin/category")
const adminRouter = require('./routes/admin/admin')
const dishRouter = require('./routes/admin/dish')
const settingsRouter = require('./routes/admin/settings')
const tableRouter = require('./routes/admin/table')
//启动主服务器   可以npm start  也可以 node ./index.js
const app = express();
app.listen(PORT,()=>{
  console.log('Server Listening '+PORT+' ...')
})
//使用中间件，这时可以F12查看response headers,多一行Access-Control-Allow-Origin: * 允许所有客户端
app.use(cors())

//把application/x-www-form-urlencoded类型的请求主体数据解析出来放入body属性--请求数据是k=v对  
// app.use(bodyParser.urlencoded({
//   extended:false
// }))

//把application/json类型的请求主体数据解析出来放入body属性--json格式解析成对象
app.use(bodyParser.json())

//挂载路由器
app.use('/admin/category',categoryRouter)
app.use('/admin',adminRouter)
app.use('/admin/dish',dishRouter)
app.use('/admin/settings',settingsRouter)
app.use('/admin/table',tableRouter)