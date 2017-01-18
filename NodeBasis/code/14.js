/**
 * 模拟复制文件
 * Created by lois on 2016/12/19.
 */
var fs = require('fs');
var destPath = 'C:/Users/LanYu/Desktop/copy dest/';
var srcPath = 'C:/Users/LanYu/Desktop/copy src/';
var srcFileName = '1.txt';
var destFileName = '2.txt';
fs.exists(srcPath+srcFileName,function (exists) {
    if(!exists){
        console.log('目标文件不存在！');
    }else{
        if(!fs.existsSync(destPath)){
            fs.mkdirSync(destPath);
        }
        fs.readFile(srcPath+srcFileName,function (err,data) {
            if (err){
                console.log("读取文件失败！");
            }else{
                fs.writeFile(destPath+destFileName,data,function (err) {
                    if (err){
                        console.log("写入文件失败！");
                    }else{
                        console.log("复制文件成功！")
                    }
                })
            }
        })

    }
})