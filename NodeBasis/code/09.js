//Node caculator
'use strict';

const args = process.argv.slice(2);
let parameter1 = args[0];
let operator = args[1];
let parameter2 = args[2];
//计算删除结果
// let result = eval(`${parameter1} ${operator} ${parameter2}`);
// console.log(result); 
//判断输入的操作符
let result;
switch (operator) {
    case '+':
        result = parseFloat(parameter1) + parseFloat(parameter2);
        break;
    case '-':
        result = parseFloat(parameter1) - parseFloat(parameter2);
        break;
    case 'x':
        result = parseFloat(parameter1) * parseFloat(parameter2);
        break;
    case '÷':
        result = parseFloat(parameter1) / parseFloat(parameter2);
        break;

    default:
        throw new Error('不认识此操作符'+operator);
}
console.log(result);