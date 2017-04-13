$(function() {
  $("#choice li p").on("click", function() {
    $("#choice li p").removeClass("on");
    $(this).addClass("on");
  });
});