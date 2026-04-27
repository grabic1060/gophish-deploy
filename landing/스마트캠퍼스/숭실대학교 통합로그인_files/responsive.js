$(document).ready(function () {
var evTimer;
function windowSize(){
	var winWidth = $(window).width();
	if (winWidth <= 640) {
      $('body').attr('class', 'type_s');
    } else if (winWidth <= 1300) {
      $('body').attr('class', 'type_m');
    } else{
      $('body').attr('class', 'type_l');
    }
}

// 초기 실행
windowSize();

// ev scroll
$(window).resize(function () {
  clearTimeout(evTimer);
  evTimer = setTimeout(function () {
    windowSize();
  }, 10)
})
});