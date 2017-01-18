var arr = [];
for(i = 0;i < 10; i++){
    arr[arr.length] = ''+arr.length+'';
};
var fps = 10;
var current = 0;
var render = () => {
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    if(current === arr.length){current = 0}
    process.stdout.write(arr[current++]);
};
setInterval(render,1000/fps);
