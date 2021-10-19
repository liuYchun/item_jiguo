function show(src) {
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', src, true);
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);
                console.log(res);
                console.log(res[0].img);
                drawing(res);
            }
        }
    }
}


function drawing(date) {
    var str = '';
    for (var i = 0; i < date.length; i++) {
        str += "<a href ='useText.html'><li>";
        var img_src = date[i].img.replace('localhost', '192.168.1.29');
        str += "<img src=" + img_src + ">"
        str += "<p>" + date[i].text + "</p>";
        str += "<div class = 'btn'><i class = 'fl'>" + date[i].totalnum + "</i><i class = 'fr'>" + date[i].num + "台</i></div>";
        str += "<p><span>" + date[i].apply + "</span>申请</p>";
        str += "<p><em>剩余时间两天</em></p></li></a>";
        var ul = document.querySelector('.clearfix');
        ul.innerHTML = str;
    }
}