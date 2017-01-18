/**
 * 通过流的方式读写文件
 * Created by lois on 2016/12/19.
 */
var fs = require('fs');
var readStream = fs.createReadStream('C:/Users/LanYu/Desktop/frames/a.txt');
var writeStream = fs.createWriteStream('C:/Users/LanYu/Desktop/frames/b.txt');
readStream.on("data", function (data) {
    if (writeStream.write(data) === false){
        readStream.pause();
    }
});
writeStream.on("drain", function () {
    readStream.resume();
});
readStream.on("end",function () {
    writeStream.close();
})
