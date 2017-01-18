/**
 * Created by lois on 2016/12/30.
 */
var fs = require('fs');
exports.getAlbums = function (callback) {
    fs.readdir('./uploads',function (err,files) {
        var AlbumsArr = [];
        (function iterator(i) {
            if (i == files.length){
                console.log(AlbumsArr);
                callback(AlbumsArr);
                return;
            }
            fs.stat('./uploads/'+files[i],function (err,stats) {
                if (stats.isDirectory()){
                    AlbumsArr.push(files[i]);
                }
                iterator(i+1);
            })
        })(0)
    })
};
exports.getImgByAlbum = function (albumName,callback) {
    fs.readdir('./uploads/'+albumName,function (err,files) {
        if (err) throw Error('找不到该文件'+albumName);
        var imgArr = [];
        (function iterator(i) {
            if (i == files.length){
                console.log(imgArr);
                callback(imgArr);
                return;
            }
            fs.stat('./uploads/'+albumName+'/'+files[i],function (err,stats) {
                if (stats.isFile()){
                    imgArr.push(files[i])
                }
                iterator(i+1);
            });
        })(0)
    })
}
