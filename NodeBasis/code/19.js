/**
 * 文件夹归类（成功案例）使用迭代强行转为同步
 * Created by lois on 2016/12/23.
 */
var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    console.log(req.url);
    if (req.url == "/favicon.ico") {
        return;
    }
    var albumsArr = [];
    fs.readdir('./albums', function (err, files) {
        (function iterator(i) {
            if (i == files.length) {
                console.log(albumsArr);
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
    res.end();
}).listen("3000", "192.168.1.132", function (err) {
    if (!err) {
        console.log('服务器启动成功！')
    }
})

