let a = document.getElementById('show');
let b = document.getElementById('formmm');
let c = document.getElementById('close');

a.addEventListener('click', function () {
  b.style.display = 'block';
});
c.addEventListener('click', function () {
  b.style.display = 'none';
});
