function show() {
    // 找到数据
    var ajax = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHttp');

    ajax.open('get', 'http://192.168.1.29:3000/report/new', true);
    ajax.send();

    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = JSON.parse(ajax.responseText);
                // 渲染数据
                // showData(data.list);

            }
        }
    }
}
show();
// function showData(val) {
//     var str = '';
//     for (var i of val) {
//         str += '<a>';
//         str += '<p>' + i.imgtitle + '</p>';
//         str += '<img src="' + i.imgurl + '" alt="">';
//         str += '<div>' + i.note + '</div>';
//         str += '</a>';

//     }

//     var ul = document.getElementsByClassName('list')[0];
//     ul.innerHTML = str;
// }