/**
 * 静态路由
 * Created by lois on 2016/12/29.
 */
var express = require('express');
var app = express();
app.use('/HTML',express.static('./public'));
app.get('/HTML:id',function (req,res) {
    var param = req.params.id;
    res.send(param);
})
app.listen('80');


var a = document.getElementById("J_UlThumb");
var childs = a.children;
var arr = [];
for(var i=0;i<childs.length;i++){
    childs[i].click();
    arr.push(document.getElementById('J_ImgBooth').src);
    window.open(arr[i])
}
console.log(arr);
