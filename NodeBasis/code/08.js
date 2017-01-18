function isAdd(num,callback) {
    if(typeof num === 'number'){
        if(num%2 === 1){
            callback(null,'是奇数')
        }else{
            callback(null,'是偶数')
        }
    }else{
        callback(new Error('不是数字'))
    }
}
isAdd(10,(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data);
});
isAdd(20,(error,data)=>{
    if(error){
        throw error;
    }
    console.log(data);
});
isAdd('asd',(error,data)=>{ 
    if(error){
        throw error;
    }
    console.log(data);
});