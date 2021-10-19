function report(link){
    // 1、创建对象
    var ajax_=new XMLHttpRequest()||new ActiveXObject('Microsoft.XMLHTTP');
    // 2、创建连接
    ajax_.open('get',link,true);
    // 3、发送请求
    ajax_.send();
    var ru=[];
    // 4、接收数据
    ajax_.onreadystatechange=function(){
        if(ajax_.readyState==4){
            if(ajax_.status==200){
                var res=JSON.parse(ajax_.responseText);
                console.log(res);
                shoureport(res);
            }
        }
    }
    var report_list_in=document.querySelector('.report_list_in');
    // console.log(report_list_in );
    // var rl=document.querySelector('.rl');
    // console.log(rl);
    function shoureport(v){
        var str='';
        for(var i=0;i<v.length;i++){
            str+='<li class="rl">';
            str+='<img src="'+v[i].img.replace(/localhost/,'192.168.1.29')+'" alt="">';
            // console.log(v[i].img.replace(/localhost/,'192.168.1.29'));
            str+='<div class="text">';
            str+='<h4>'+v[i].text+'</h4>';
            str+='<p class="rep_b">';
            str+='<span class="img"><img src="../img/detail1.jpg"></span>';
            str+='<span class="uName">'+v[i].endTime+'</span>'
            str+='<span class="uName">'+v[i].uName+'</span>';
            str+='<span class="uName"><img src="../css/img/xin.png">'+3+'</span>';
            str+='<span class="uName"><img src="../css/img/reply.png">'+4+'</span>';
            str+='</p>';
            str+='</div>';
            str+='<p class="more">';
            str+='<a>关于'+v[i].text.substring(0, 5)+'还有4篇报告，点击查看</a>'
            str+='</p>'
            str+='</li>'
            report_list_in.innerHTML=str;
        }
    }
}