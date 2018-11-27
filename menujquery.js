$(function(){
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
  for(var i=0;i<provice.length;i++){
      $('select').eq(0).append('<option>'+provice[i]+'</option>');
  }
    $('#province').change(function(){
       // var num=$('option:selected').index();
      var num=$(this).children('option:selected').index();
      $('#city').children('option').not(':eq(0)').remove();
      $('#town').children('option').not(':eq(0)').remove();
      for(var j=0;j<citys[num-1].length;j++){
          $('#city').append('<option>'+citys[num-1][j]+'</option>');
      }
      $('#city').change(function(){
           $('#town').children('option').not(':eq(0)').remove();
          for(var l=0;l<towns[num-1][num2-1].length;l++){

              $('#town').append('<option>'+towns[num-1][num2-1][l]+'</option>');
          }
      })
    })
});
