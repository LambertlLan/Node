console.time('main');
console.log('开始执行');
//使用setTimeout()讲代码放到队列最后执行
setTimeout(function() {
    for (var i = 0; i < 1000000000; i++) {

    }
}, 0);
//使用回掉函数做到异步执行
get('http://www.baidu.com/1.jpg',function () {

})
console.log('执行完成')
console.timeEnd('main');

