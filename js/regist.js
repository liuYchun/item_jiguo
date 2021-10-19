function register() {
    // var user_ = document.getElementById('user').value;
    // var pass_ = document.getElementById('pass').value;

    //1、创建对象
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    //2、创建连接
    ajax_.open('post', 'http://192.168.1.29:3000/users/register', true);
    //3、发送请求
    //拼接数据

    var data = {
        username: "admin",
        password: "123456"
    };
    ajax_.send(data);
    //4、接收服务器数据
    ajax_.onreadystatechange = function () {
        console.log(ajax_.readyState);
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                console.log(ajax_.responseText);
            } else {
                console.log('erro');
            }
        }
    }

}