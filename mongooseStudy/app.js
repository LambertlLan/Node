/**
 * Created by Lambert.
 * User: landingyu@163.com
 * Date: 2017/1/17
 * Time: 17:27
 *
 */
var db = require('./models/db');
var Student = require('./models/Student');
var xiaoming = new Student({"name":"小明","age":18,"sex":"男"});
xiaoming.save(function () {
    console.log("储存成功")
})