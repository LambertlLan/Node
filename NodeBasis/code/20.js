/**
 *读取静态文件
 * Created by lois on 2016/12/23.
 */
var fs = require('fs');
var url = require('url');
var http = require('http');
var path = require('path');
function postStatic(req,res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname.indexOf('.') === -1){
        pathname+='/index.ejs';
    }
    var fileUrl = './'+path.normalize('static/'+pathname);
    var extName = path.extname(fileUrl);
    fs.readFile(fileUrl,function (err,data) {
        if (err){
            fs.readFile('./static/404.html',function (err,data) {
                res.end(data);
            })
            return;
        }
        getMime(extName,function (mime) {
            res.writeHead(200,{"Content-Type":mime});
            res.end(data);
        })
    })
}
function getMime(mime,callback) {
    fs.readFile('./mime.json',function (err,data) {
        if (err) throw Error('找不到mime.json');
        var mimeJson = JSON.parse(data);
        var mimeValue = mimeJson[mime] || "text/plain";
        callback(mimeValue);
    })
}
module.exports = { postStatic };
