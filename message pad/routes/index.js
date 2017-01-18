var express = require('express');
var router = express.Router();
var db = require('../models/db');
var ObjectID = require('mongodb').ObjectID;
//寻找favicon.ico
router.get('/favicon.ico', function (req, res) {
    return;
})
/* 为首页返回留言*/
router.get('/', function (req, res, next) {
    db.getAllCount("liuyan",function(count){
        res.render("index",{
            "pageamount" : Math.ceil(count / 5)
        });
    });
});
router.get('/du',function (req,res) {
    var page = parseInt(req.query.page);
    db.readMessage('liuyan',(page-1)*5, function (err,result) {
        res.json({"result":result});
    })
})
router.get('/shanchu',function (req,res) {
    var id = req.query.id;
    var liuyanId = id.toHexString();
    console.log(ObjectID(liuyanId));
    db.deleteMany('liuyan',{"_id" : id},function (err,result) {
        if (err){
            throw err;
            return;
        }
        res.send(result);
    })
})

module.exports = router;
