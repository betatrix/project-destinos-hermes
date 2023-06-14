window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var secao = document.getElementById('about');
    var secaoOffsetTop = secao.offsetTop;
  
    if (window.pageYOffset >= secaoOffsetTop) {
      header.classList.add('header-dark');
      header.classList.remove('header-glass');
    } else {
      header.classList.add('header-glass');
      header.classList.remove('header-dark');
    }
  });
