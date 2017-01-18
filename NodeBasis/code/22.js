/**
 * 小相册
 * Created by lois on 2016/12/27.
 */
var http = require('http');
var fs = require('fs');
var url = require('url');
var ejs = require('ejs');
var p = require('./modules/module_static');
http.createServer(function (req,res) {

    if (req.url == '/upload' && req.method.toLowerCase() == 'post'){
     return;
    }
    var path = url.parse(req.url).pathname;
    if (path === '/favicon.ico') return;
    console.log(path);
    if (path == '/'){
        urlname = 'index.ejs'
    }else{
        urlname = 'img.ejs'
    }
    p.postStatic(req, res);
    fs.readFile('./HTML/'+urlname,function (err,data) {
        var tmp = data.toString();
        var albumsArr = [];
        if (path == 'index.ejs'){
            fs.readdir('./albums', function (err, files) {
                (function iterator(i) {
                    if (i == files.length) {
                        var dictionary = {dir:albumsArr};
                        var html = ejs.render(tmp, dictionary);
                        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
                        res.end(html);
                        return;
                    }
                    fs.stat('./albums/' + files[i], function (err, stats) {
                        if (stats.isDirectory()) {
                            albumsArr.push(files[i]);
                        }
                        iterator(i+1);

                    })
                })(0)

            })
            return;
        }
        fs.readdir('./albums'+path,function (err,files) {
            console.log(files);
            var dictionary = {path:path,files:files};
            var html = ejs.render(tmp, dictionary);
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
            res.end(html);
        })

    })

}).listen('80','192.168.1.132');