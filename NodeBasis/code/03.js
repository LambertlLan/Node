var argvs = process.argv.slice(2)
switch(argvs[0]){
    case'init':
    console.log('你需要INIT');
    break;
    case'install':
    var an = argvs[1];
    console.log('你需要安装'+an);
    break;
    case 'uninstall':
    var xie = argvs[1];
    console.log('你需要卸载'+xie);
    break;
}
var a = 11111;
process.stdout.write(`${a}哈哈哈`);