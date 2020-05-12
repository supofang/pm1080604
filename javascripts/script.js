$(document).ready(function () {
  //簽到點擊後加 .on
  $('.check a').on('click', function (e) {
    e.preventDefault();
    $(this).addClass('on');
  })

  //carousel 手機滑動
  $(".carousel").on("touchstart", function (event) {
    
    var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function (event) {
      var xMove = event.originalEvent.touches[0].pageX;
      if (Math.floor(xClick - xMove) > 5) {
        $(this).carousel('next');
      }
      else if (Math.floor(xClick - xMove) < -5) {
        $(this).carousel('prev');
      }
    });
    $(".carousel").on("touchend", function () {
      $(this).off("touchmove");
    });
  })

  var num = $('.num span').text();
  var w = num / 500;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= $('.js-progress').offset().top) {
      $('.progress-bar').css('width', w + '%');
      if (w >= 10) {
        $('.gift-progress li:eq(0)').addClass('on');
      }
      if (w >= 20) {
        $('.gift-progress li:eq(0)').addClass('on');
        $('.gift-progress li:eq(1)').addClass('on');
      }
      if (w >= 40) {
        $('.gift-progress li:eq(0)').addClass('on');
        $('.gift-progress li:eq(1)').addClass('on');
        $('.gift-progress li:eq(2)').addClass('on');
      }
      if (w >= 100) {
        $('.gift-progress li').addClass('on');
      }
    }
  });

  var progressH = $('.gift-progress li:eq(3)').height();
  $('.gift-progress').css('height',progressH+15);
  $(window).resize(function(){
    var progressH = $('.gift-progress li:eq(3)').height();
    $('.gift-progress').css('height',progressH+15);
  });
  $.fn.snow({
    // maxSize: 50, 
    // newOn: 100 
  })

});

// $(function () {
//   $up();
//   setInterval(function(){
//     $up();
//   },5000)

//   function $up() {
//     $('.drink div').removeClass('up').each(function(index){
//       $(this).delay(index*200).animate({
//         'background':'transparent'
//       },0,function(){
//         $(this).addClass('up')
//       })
//     })
//   }
// })
