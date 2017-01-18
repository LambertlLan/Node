/**
 * Created by Lambert.
 * User: landingyu@163.com
 * Date: 2017/1/17
 * Time: 17:42
 *
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/haha');
db.once('open', function(callback) {
    console.log('数据库连接成功.');
});
module.exports = db;