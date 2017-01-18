/**
 * 文件夹归类（失败案例）
 * Created by lois on 2016/12/23.
 */
var fs = require('fs');
var http = require('http');
http.createServer(function (req,res) {
    if (req.url == "/favicon.icon"){
        return;
    }
    var ablumArr = [];
    fs.readdir('./albums',function (err,files) {
        for(var i = 0;i < files.length;i++){
            var thefilename = files[i]
            fs.stat('./albums/'+thefilename,function (err,stats) {
                if (stats.isDirectory()){
                    ablumArr.push(thefilename) ;
                }
                console.log(ablumArr);
            })
        }
    })
    res.end();
}).listen("3000","192.168.1.132",function (err) {
    if (!err){
        console.log('服务器启动成功！')
    }
})

