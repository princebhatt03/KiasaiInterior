let a = document.getElementById('show');
let b = document.getElementById('formmm');
let c = document.getElementById('close');

a.addEventListener('click', function () {
  b.style.display = 'block';
});
c.addEventListener('click', function () {
  b.style.display = 'none';
});

// Loader...

window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader-active');
  setTimeout(function () {
    preloader.style.transition = 'opacity 0.6s';
    preloader.style.opacity = '0';
    preloader.addEventListener('transitionend', function () {
      preloader.style.display = 'none';
    });
  }, 450);
  setTimeout(function () {
    document.body.style.overflow = 'visible';
  }, 450);
});
