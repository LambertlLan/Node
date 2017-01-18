/**
 * 简易服务器原理
 * Created by lois on 2016/12/19.
 */
var fs = require('fs');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var server = http.createServer(function (req,res) {
    if (validataExName(req)){
        parseParam(req,res);
        readStaticFile(req, res);
    }else{
        res.writeHead(404,{"Content-type":"text/plain;charset=utf-8"});
        res.end();
    }
});
server.listen('3000',function (err) {
    if(!err){
        console.log('启动服务器成功！')
    }
})
function validataExName(req) {
    var pathName = url.parse(req.url, true).pathname;
    var exName = pathName.substring(pathName.indexOf('.'));
    return ".html.js.css.png.jpg.gif".indexOf(exName)>=0;
}
var writeOut = function (query, res) {
    res.write(JSON.stringify(query));
    res.end();
}
function parseParam(req,res) {
    if(req.method.toUpperCase() == 'POST'){
        var param = "";
        req.on('data',function (data) {
            param += data;
        })
        req.on('end',function () {
            req.param = querystring.parse(param);
        })
        console.log(req.param);
    }else if (req.method.toUpperCase() == 'GET'){
        req.param = url.parse(req.url, true).query;
    }
}
function readStaticFile(req,res) {
    var pathName = url.parse(req.url, true).pathname;
    if (fs.existsSync('.'+pathName)){
        fs.createReadStream('.'+pathName).pipe(res);
    }else{
        res.writeHead(404,{"Content-type":"text/plain;charset=utf-8"});
        res.end();
    }
}