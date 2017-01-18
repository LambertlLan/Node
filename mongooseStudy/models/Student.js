/**
 * Created by Lambert.
 * User: landingyu@163.com
 * Date: 2017/1/17
 * Time: 17:43
 *
 */
var mongoose = require('mongoose');
var db = require('./db')
var studentSchema = new mongoose.Schema({
    name     : {type : String},
    age      : {type : Number},
    sex      : {type : String},
});
var studentModel = db.model('student', studentSchema);
module.exports = studentModel;