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


// 正则
var phone = document.querySelector('.phone');
phone.addEventListener("focus", function () {
    phone.nextElementSibling.innerHTML = '';
})
phone.addEventListener("blur", function () {
    //正则判断
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    //如果值为空，则p标签的内容改为“不能为空”
    if (phone.value == '') {
        phone.nextElementSibling.innerHTML = '电话号码不能为空';
        return false;
    } else if (!reg.test(phone.value)) {
        phone.nextElementSibling.innerHTML = '电话号码格式不正确';
        return false;
    }
})
var pic = document.querySelector('.pic');
pic.addEventListener("focus", function () {
    this.nextElementSibling.nextElementSibling.innerHTML = '';
})
pic.addEventListener("blur", function () {
    //正则判断
    var reg = /^\d+$/;
    //如果值为空，则p标签的内容改为“不能为空”
    if (this.value == '') {
        this.nextElementSibling.nextElementSibling.innerHTML = '效验码码不能为空';
        return false;
    }
})

var number = document.querySelector('.number');
number.addEventListener("focus", function () {
    this.nextElementSibling.nextElementSibling.innerHTML = '';
})
number.addEventListener("blur", function () {
    //正则判断
    var reg = /^\d+$/;
    //如果值为空，则p标签的内容改为“不能为空”
    if (this.value == '') {
        this.nextElementSibling.nextElementSibling.innerHTML = '验证码不能为空';
        return false;
    } else if (!reg.test(this.value)) {
        this.nextElementSibling.nextElementSibling.innerHTML = '验证码格式不正确';
        return false;
    }
})
var username = document.querySelector('.username');
username.addEventListener("focus", function () {
    this.nextElementSibling.innerHTML = '';
})
username.addEventListener("blur", function () {
    //正则判断
    var reg = /^[\w\u4e00-\u9fa5]{6,12}$/;
    //如果值为空，则p标签的内容改为“不能为空”
    if (this.value == '') {
        this.nextElementSibling.innerHTML = '用户名不能为空';
        return false;
    } else if (!reg.test(this.value)) {
        this.nextElementSibling.innerHTML = '用户名格式不正确长度不在范围内或者存在非法字符';
        return false;
    }
})
var pwd1 = document.querySelector('.pwd1');
pwd1.addEventListener("focus", function () {
    this.nextElementSibling.innerHTML = '';
})
pwd1.addEventListener("blur", function () {
    //不能为空
    //长度在6-12之间 字母数字下划线       
    //不能全是数字
    //不能全是字母
    var reg = /^\w{6,12}$/;
    var reg1 = /[^0-9]/;
    var reg2 = /[^a-zA-Z]/;
    //不能为空
    if (this.value == '') {
        this.nextElementSibling.innerHTML = '密码不能为空';
        return false;
    }
    //长度在6-12之间 字母数字下划线
    else if (!reg.test(this.value)) {

        this.nextElementSibling.innerHTML = '长度不在范围内或者存在非法字符';
        return false;
    }
    //不能全是数字  
    else if (!reg1.test(this.value)) {
        this.nextElementSibling.innerHTML = '不能全是数字';
        return false;
    }
    //不能全是字母
    else if (!reg2.test(this.value)) {
        this.nextElementSibling.innerHTML = '不能全是字母';
        return false;
    }
})
var pwd2 = document.querySelector('.pwd2');
pwd2.addEventListener("focus", function () {
    this.nextElementSibling.innerHTML = '';
})
pwd2.addEventListener("blur", function () {
    //不能为空
    if (this.value == "") {
        this.nextElementSibling.innerHTML = '密码不能为空';
        return false;
    }
    //两次密码输入不一致
    else if (ped1.value != this.value) {
        this.nextElementSibling.innerHTML = '两次密码输入不一致';
        return false;
    }
})