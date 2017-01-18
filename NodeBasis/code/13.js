/**
 * 服务启动与监听
 * Created by lois on 2016/12/19.
 */
var http = require('http');
var server = http.createServer();//创建服务
server.on("request",function (req,resp) { //接收到请求时的方法
    console.log(req+"接受到请求");
/*    server.close(function () {
        console.log("禁止新的链接!");
    })*/
});
/*server.on("close",function () {
    console.log("已被禁止！")
})*/
server.setTimeout(3000,function () {  //3s之后设置超时
    console.log("已超时！");
})
server.listen('3000',function (err) {  //监听3000端口
    if (err){
        throw err;
    }else{
        console.log("监听3000端口成功");
    }
})