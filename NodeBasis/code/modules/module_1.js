const fs = require('fs');
fs.readFile(__dirname+'/../list.md','utf8',(err,data) => {
    if(err)
    throw error;
    console.log(data);
})