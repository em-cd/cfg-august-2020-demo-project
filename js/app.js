window.addEventListener('DOMContentLoaded', function() {

  var button = document.getElementById('go-to-top');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      button.classList.remove('d-none');
    } else {
      button.classList.add('d-none');
    }
  });

  button.addEventListener('click', function() {
    window.scrollTo(0, 0);
  });

});