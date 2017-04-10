$(function() {
  $("#lnb li a").on("click", function() {
    var idx = $(this).parent().index();
    //console.log(idx);
    $(this).parent().addClass("on").siblings().removeClass("on");
    return false;
  });
});