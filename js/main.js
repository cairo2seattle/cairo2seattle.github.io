//Scroll fixed header
$(window).scroll(function(){
  if ($(window).scrollTop() >= 204) {
    $("#nav-bar").addClass("fixed-header");
    $("#nav-padding").addClass("padding-header");
  } else {
    $("#nav-bar").removeClass("fixed-header");
    $("#nav-padding").removeClass("padding-header");
  }
});
//Hover border highlight
$(document).ready(function(){
  $("a.project").hover(function(){
    $(this).parent().css("box-shadow", "0px 1px 0px 2px #FF06D1");
    }, function() {
    $(this).parent().css("box-shadow", "0px 3px 0px 1px #F2F2F2");
  });
});
//project pages Only ?
//Scroll back to top
$(window).ready(function($) {
  $("#to-top-bttn").click(function(event) {
    $("body").animate(
    {scrollTop: "0"},
    400,
    function() {
    });
  });
});
//Scroll back to the top button
$(window).scroll(function(){
  if ($(window).scrollTop() >= 400) {
    $(".back-to-top").css("display", "inline-block");
  } else {
    $(".back-to-top").css("display", "none");
  }
});
