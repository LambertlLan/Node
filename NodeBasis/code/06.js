var users = {
    'admin':'123',
    'user1':'123',
    'user2':'123'
}
var username = '';
process.stdout.write('请输入用户名:'+'\n');

process.stdin.on('data',(data) =>{
    data = data.toString().trim();
    if(!username){
        if(Object.keys(users).indexOf(data) === -1){                   
            process.stdout.write('该用户不存在'+'\n');
            process.stdout.write('请输入用户名:'+'\n');
        }else{
            process.stdout.write('请输入密码:'+'\n');
            username = data;
        }

    }else{
        if(users[username] === data){
            console.log('登陆成功')
        }else{
            process.stdout.write('请输入密码:'+'\n');
        }
    }
})