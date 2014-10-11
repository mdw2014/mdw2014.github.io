$(function(){
  $('#backgroundCanvas').attr('width', $(window).width()).attr('height', $(window).height());

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
      $('#backgroundCanvas').attr('width', $(window).width()).attr('height', $(window).height());
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

function getRandomArbitary(min, max) {
  return Math.random() * (max - min) + min;
}

document.addEventListener('DOMContentLoaded', function(){
  var boids = [];
  var canvas = document.getElementById('backgroundCanvas');
  var ctx = canvas.getContext('2d');

  var Boid = function(size, x, y, velX, velY) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    return this;
  };

  function setup() {
    for (var i = 0; i < 20; i++) {
      var size = getRandomArbitary(canvas.width/80, canvas.width/30);
      var x = getRandomArbitary(0, canvas.width);
      var y = getRandomArbitary(0, canvas.height);
      var velX = getRandomArbitary(-canvas.width/400, canvas.width/400);
      var velY = getRandomArbitary(-canvas.height/200, -canvas.height/400);
      boids.push(new Boid(size, x, y, velX, velY));
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < boids.length; i++) {
      ctx.beginPath();
      ctx.arc(boids[i].x, boids[i].y, boids[i].size, 0, Math.PI*2.0);
      ctx.fillStyle = '#fff';
      ctx.fill();

      if (boids[i].x < -boids[i].size) boids[i] = canvas.width;
      if (canvas.width + boids[i].size < boids[i].x) boids[i].x = -boids[i].size;
      if (boids[i].y < -boids[i].size) {
        boids[i].x = getRandomArbitary(0, canvas.width);
        boids[i].y = canvas.height + boids[i].size;
        boids[i].velX = getRandomArbitary(-canvas.width/400, canvas.width/400);
        boids[i].velY = getRandomArbitary(-canvas.height/200, -canvas.height/400);
      }

      boids[i].y += boids[i].velY;
      boids[i].x += boids[i].velX;
    }

    requestAnimationFrame(draw);
  }

  setup();
  draw();
});
