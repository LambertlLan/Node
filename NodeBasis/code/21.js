/**
 * 上传图片及改名
 * Created by lois on 2016/12/26.
 */
var http = require('http');
var formidable = require('formidable');
var util = require('util');
var sd = require('silly-datetime');
var fs = require('fs');
var path = require('path');

http.createServer(function (req,res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = "./images";
        form.parse(req, function (err, fields, files) {
            var time = sd.format(new Date(), 'YYYYMMDDHHmm');
            var ran = parseInt(Math.random() * 8999 + 10000);
            var extname = path.extname(files.tupian.name);
            var oldpath = __dirname + '/' + files.tupian.path;
            var newpath = __dirname + "/images/" + time + ran + extname;
            fs.rename(oldpath,newpath,function (err) {
                if (err){
                    throw  Error('改名失败！');
                }
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end('改名成功！');
            })

        });

        return;
    }
}).listen('80','192.168.1.132');
