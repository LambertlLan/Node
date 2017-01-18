/**
 * require缓存清除
 * Created by lois on 2016/12/15.
 */
setInterval(() => {
    //循环清除缓存数据
    Object.keys(require.cache).forEach((key) => {
        delete require.cache[key];
    })
    const m2 = require('./modules/module_2')
    console.log(m2.getTime())
},1000)
