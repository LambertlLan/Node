/**
 * Created by lois on 2017/1/4.
 */
var MongoClient = require('mongodb').MongoClient;
function _connectDB(callback) {
    var url = 'mongodb://localhost:27017/smallMessage';
    MongoClient.connect(url, function (err,db) {
        if (err){
            callback(err, null);
            return;
        }
        callback(err, db);
        db.close();
    })
}
//向数据库中存储数据
exports.saveMessage = function (collection,json,callback) {
    _connectDB(function (err,db) {
        if (err){
            callback(err, null);
            return;
        }
        db.collection(collection).insertOne(json,function (err,result) {
            callback(err, result);
            db.close();
        })
    })
}
//从数据库中读取数据
exports.readMessage = function (collection,skipNum,callback) {
    _connectDB(function (err,db) {
        if (err){
            callback(err, null);
            return;
        }
        var cursor = db.collection(collection).find({}).limit(5).skip(skipNum);
        var result = [];
        cursor.each(function (err, doc) {
            if (err) {
                callback(err, null);
                db.close(); //关闭数据库
                return;
            }
            if (doc != null) {
                result.push(doc);   //放入结果数组
            } else {
                //遍历结束，没有更多的文档了
                callback(null, result);
                db.close(); //关闭数据库
            }
        });
    })
}
exports.getAllCount = function (collectionName,callback) {
    _connectDB(function (err, db) {
        db.collection(collectionName).count({}).then(function(count) {
            callback(count);
            db.close();
        });
    })
}
exports.deleteMany = function (collectionName, json, callback) {
    _connectDB(function (err, db) {
        //删除
        db.collection(collectionName).deleteMany(
            json,
            function (err, results) {
                callback(err, results);
                // db.close(); //关闭数据库
            }
        );
    });
}