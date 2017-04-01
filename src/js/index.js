$(function() {

  //리뷰 슬라이드
  $(document).ready(function(){
    $('#review-slider').bxSlider({
      /*auto: true,*/
      slideWidth: 512,
      minSlides: 2,
      maxSlides: 2,
      slideMargin: 10,
      nextSelector: '#slider-next',
      prevSelector: '#slider-prev',
      nextText: '',
      prevText: ''
    });
  });

});