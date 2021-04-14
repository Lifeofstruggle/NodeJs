/**
 * Created by 张金旭 on 2021/4/14.
 */
//引入模块
var mysql=require('mysql');

//连接数据库
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'vue',
})
connection.connect();
//查询数据
var sql='SELECT * FROM p_users';
connection.query(sql,function (err,result) {
    if(err){
        console.log('error');
        return;
    }
    console.log('*********查询*********');
    console.log(result);
    console.log('结束');
})
connection.end();