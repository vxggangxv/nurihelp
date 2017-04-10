$(function() {
  /*체크박스*/
  $('.chk_box').click(function(){
    if ($(this).prop('checked'))
    {
      $(this).addClass('on');
    }else {
      $(this).removeClass('on');
    }
  });
  /*레이어팝업 닫기*/
  $('.layer_pop .pop_area .pop_close').click(function(){
    $(this).parents('.layer_pop').hide();
  });
});