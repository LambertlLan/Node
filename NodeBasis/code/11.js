/**
 * 模拟node内部require机制
 * Created by lois on 2016/12/15.
 */
'use strict';
function $require(filePath) {
    //1.读取文件内容（自动判断文件是否存在）
    //2.加入自执行函数
    //3.抛出
    const fs = require('fs');
    const path = require('path');
    const filename = path.join(__dirname, filePath);
    const dirname = path.dirname(filename);
    let code = fs.readFileSync(filename, 'utf8');
    let module = {id: filename, exports: {}};
    let exports = module.exports;
    code = `(function($require,module,exports,__dirname,__filename) {
        ${code}
    })($require,module,exports,dirname,filename)`;
    eval(code);
    return module.exports;

}

const module_test = $require('./modules/module_test.js');
module_test.say("$require成功");