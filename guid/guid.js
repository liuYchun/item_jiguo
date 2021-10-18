

function main(api) {


    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    var ul_ = document.getElementById('ul_');

    var a_ = [];
    var li_ = [];
    var img_ = [];
    var p_ = [];
    var div_ = [];
    var span_1 = [];
    var span_2 = [];
    ajax.open('get', api);
    ajax.send();
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = ajax.responseText;
                data = eval('(' + data + ')')
                // console.log(data);
                for (var i = 0; i < 15; i++) {
                    // 创建a标签
                    a_[i] = document.createElement('a');
                    ul_.appendChild(a_[i]);
                    a_[i].href = "./guid_text.html";
                    // 创建添加li
                    li_[i] = document.createElement('li');
                    a_[i].appendChild(li_[i]);
                    // 创建添加img
                    img_[i] = document.createElement('img');
                    li_[i].appendChild(img_[i]);
                    img_[i].src = data[i].img.replace(/192.168.1.64/, '192.168.1.29');
                    // 创建添加p
                    p_[i] = document.createElement('p');
                    li_[i].appendChild(p_[i]);
                    p_[i].innerHTML = data[i].text;
                    // console.log(data[i].text);
                    // 创建添加div
                    div_[i] = document.createElement('div');
                    li_[i].appendChild(div_[i]);
                    // 创建爱心
                    var img_xin = document.createElement('img')
                    div_[i].appendChild(img_xin);
                    img_xin.src = "../css/img/xin.png";
                    // 创建添加span_1
                    span_1[i] = document.createElement('span');
                    div_[i].appendChild(span_1[i]);
                    span_1[i].innerHTML = data[i].like;

                    // 创建聊天
                    var img_reply = document.createElement('img')
                    div_[i].appendChild(img_reply);
                    img_reply.src = "../css/img/reply.png";
                    // 创建添加span_2
                    span_2[i] = document.createElement('span');
                    div_[i].appendChild(span_2[i]);
                    span_2[i].innerHTML = data[i].words;
                }
            }
        }
    }

}
