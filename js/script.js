$(function(){
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.triangle').on('click', function(){
    $(this).parent().toggleClass('open');
  });

  $('#hamburger').on('click', function(){
    $('.nav').toggleClass('open');
  });

  var galleryIsOpen = false;

  $('.thumbnails > img').on('click', function(){
    if (!galleryIsOpen) {
      src = $(this).attr('src');
      $('#gallery-img').attr('src', src);
      $('#gallery').addClass('showing');
    }
  });

  $('#gallery-close').on('click', function(){
    $('#gallery').removeClass('showing');
    galleryIsOpen = false;
  });

});
