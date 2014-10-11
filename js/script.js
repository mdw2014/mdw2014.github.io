$(function(){
  $('#backgroundCanvas').width($(window).width).height($(window).height);

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

  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });

  var resizing = false;
  $(window).on('resize', function(){
    if (resizing) {
      clearTimeout(resizing);
    }

    resizing = setTimeout(function(){
      $('#backgroundCanvas').width($(window).width).height($(window).height);
    }, 300);
  });

});
