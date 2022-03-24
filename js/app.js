// 상단메뉴
$(document).ready(function(){
  
var btn = $("#aboutMe");
var modal = $(".modal_container");
var close = $("#close");

btn.on("click", function () {
  modal.addClass("show");
});

close.on("click", function () {
  modal.removeClass("show");
});

var btn2 = $("#btn2");
var portfolio = $(".portfolio");

btn2
  .on("mouseover", function () {
    portfolio.addClass("show");
  })
  .on("mouseleave", function () {
    portfolio.removeClass("show");
  });

// 스크롤 top
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".top").fadeIn();
  } else {
    $(".top").fadeOut();
  }
});

$(".top").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 400);
  return false;
});
//모바일 버튼
  $(".moblie_btn").click(function () {
    $(".sub_nav").toggleClass("on");
  });
})