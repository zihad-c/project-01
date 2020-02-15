$(function(){
    
    
   // slider1 js 
$('.slider1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1500,
  speed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ] 
});
    
    
       // slider2 js 
$('.slider2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 1500,
  speed: 2000,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    
    
    
   // scrolling menu js
$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling > 200){
    $('.navbar').addClass('bg');
}
else {
     $('.navbar').removeClass('bg');
}
}); 
    
    
    
    
    
    
    
    
    
    
    
    
});