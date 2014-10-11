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

  (function(cmd, fire) {
    var keys = [];
    var l = cmd.length, CMD = cmd.join(',');
    $(document).on('keydown', function(event) {
      keys.push(event.which);
      if (keys.length < l) return true;
      if (keys.join(',') === CMD) fire();
      keys = [];
    });
  })([38,38,40,40,37,39,37,39,66,65], function(){
    if (!galleryIsOpen) {
      $('#gallery-img').attr('src', 'img/works/no-image.gif');
      $('#gallery').addClass('showing');
    }
  });

});
