/**
 * 通过管道方式复制文件
 * Created by lois on 2016/12/19.
 */
var fs = require("fs");
fs.createReadStream('C:/Users/LanYu/Desktop/frames/a.txt').pipe(fs.createWriteStream('C:/Users/LanYu/Desktop/frames/c.txt'));