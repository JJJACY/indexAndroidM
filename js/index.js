const PAGE = {
  data:{
    POST: 'https:www.jevescript.com/api/task/mobile',
  },
  init: function(){
    this.bind();
  },
  bind:function(){
    $('#number-btn').on('click',this.keyvalue);
  },
  keyvalue: function(){
    let value = $('#number-input').val();
    $.ajax({
      type: 'POST',
      data: { phone: value },
      url: 'https:www.jevescript.com/api/task/mobile',
      success: ( res )=>{
        console.log(res.message) 
        switch(res.message){
          case '手机号不能为空':
            $('#span-tag').text('手机号不能为空');
            $($('#input-box')).addClass('active');
            break;
          case '手机格式错误':
            $('#span-tag').text('手机格式错误');
            $($('#input-box')).addClass('active');
            break;
          case '提交成功':
            $('#span-tag').text('提交成功');
            $($('#input-box')).removeClass('active');
            $($('#sec-one')).css('display','none');
            $($('#sec-one-copy')).css('display','block');
            break;
        }
        $('#span-tag').css('display','inline-block');
      },
      error: (err) => {
        console.log(err)
      } 
    })
  }
}
PAGE.init();