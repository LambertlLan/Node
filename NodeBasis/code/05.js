var fs = require('fs');
var arr = [];
for(i = 1;i < 7; i++){
    arr[arr.length] = fs.readFileSync(`./frames/${i}.txt`,'utf-8');
};
var fps = 10;
var current = 0;
var render = () => {
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    if(current === arr.length){current = 0}
    process.stdout.write(arr[current++]);
}
setInterval(render,1000/fps);
