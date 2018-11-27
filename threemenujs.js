window.onload=function(){
    var provice=['江西','湖北','广东'];
    var citys=[
        ['南昌','九江'],
        ['石家庄','雄安'],
        ['深圳','汕头']
    ];
    var towns=[
        [['东湖镇','青山湖'],['都昌县','庐山']],
        [['石头县','是沙县'],['熊县','熊2县']],
        [['龙岗','罗湖'],['山头县','山沟县']]
    ];
    function $(str){
        return document.getElementById(str);
    }
    var province=$('province');
    var city=$('city');
    var town=$('town');
    // var frame=document.createDocumentFragment()
    (function show(){
        for(var i=0;i<provice.length;i++){
            // var option=document.createElement('option');
            // option.innerHTML=provice[i];
            // frame.appendChild(option);
            //add() 方法用于向 <select> 添加一个 <option> 元素。
            // new option(str1,str2); 一般用在动态生成选择项目 <option value="这里是str2">这里是str1</option>
            province.add(new Option(provice[i]));
        }
    })();

    // province.appendChild(frame);
    province.onchange=function() {
        city.length=1;
        town.options.length=1;
        var sum = province.selectedIndex;
        for(var j=0;j<citys[sum-1].length;j++){
            city.add(new Option(citys[sum-1][j]));
        }
        city.onchange=function(){
            town.options.length=1;
            var sum2=city.selectedIndex;
            for(var k=0;k<towns[sum-1][sum2-1].length;k++){
                town.add(new Option(towns[sum-1][sum-1][k]));
            }
        }
    }
};