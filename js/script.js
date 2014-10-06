$(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.triangle').on('click', function(){
    $(this).parent().toggleClass('open');
  });
});
