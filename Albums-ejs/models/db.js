var MongoClient = require('mongodb').MongoClient;

function _connectDB(callback) {
    //数据库链接地址
    var url = 'mongodb://localhost:27017/album';
    MongoClient.connect(url, function (err,db) {
        if (err){
            callback(err, null);
            return;
        }
        callback(err, db);
    })
}
exports.insertOne = function (collectionName,json,callback) {
    _connectDB(function (err,db) {
        db.collection(collectionName).insertOne(json, function (err,result) {
            callback(err,result);
        })
    })
}
exports.find = function (collectionName,json,callback) {
    var resultArr = [];
    _connectDB(function (err,db) {
        var cursor = db.collection(collectionName).find(json);
        cursor.each(function (err,doc) {
            if (doc != null){
                resultArr.push(doc);
            }else{
                callback(null,resultArr)
            }
        })
    })
}