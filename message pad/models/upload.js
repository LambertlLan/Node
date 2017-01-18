/**
 * Created by lois on 2017/1/4.
 */
var formidable = require('formidable');
var db = require('./db.js');
exports.postJson = function (req,res) {
    var form = new formidable.IncomingForm();
    form.enctype = "multipart/form-data";
    form.parse(req, function(err, fields, files) {
        if (err){
            throw err;
            return;
        }
        db.saveMessage('liuyan',fields,function (err,result) {
            if (err){
                throw err;
                return;
            }
            res.json(result);
        })
    });
}