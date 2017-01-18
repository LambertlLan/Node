var express = require('express');
var router = express.Router();
var file = require('../models/file');
var upload = require('../models/upload');
var db = require('../models/db');
//寻找favicon.ico
router.get('/favicon.ico',function (req,res) {
    return;
})

/*GET up page*/
router.get('/up', function(req, res, next) {
    file.getAlbums(function (AlbumsArr) {
        res.render('up', { "dirname": AlbumsArr });
    });
});
/*POST img*/
router.post('/upload',upload.uploadImg);
/* GET home page*/
router.get('/', function(req, res, next) {
    //调用DAO模块，插入数据
    db.find('student',{"age":{$gt:13}},function (err,result) {
        console.log(result);
    })
    file.getAlbums(function (AlbumsArr) {
        res.render('index', { "dirname": AlbumsArr });
    });
});
/*GET img page*/
router.get('/:albumName', function(req, res, next) {
    var albumName = req.params.albumName;
    file.getImgByAlbum(albumName,function (imgArr) {
        res.render('img', { "albumName":albumName,"imgArr": imgArr });
    });
});


module.exports = router;
