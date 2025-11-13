
(function(){
  // mobile nav
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // cookie banner (demo)
  var key = 'cookie-demo-consent';
  function initCookieBanner(){
    var banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = '<span>Questo sito usa solo cookie tecnici per il funzionamento.</span> <a href="/cookie.html">Dettagli</a> <button id="acceptCookies">Ok</button>';
    document.body.appendChild(banner);
    if (!localStorage.getItem(key)) banner.style.display = 'flex';
    document.getElementById('acceptCookies').addEventListener('click', function(){
      localStorage.setItem(key, '1');
      banner.remove();
    });
  }
  document.addEventListener('DOMContentLoaded', initCookieBanner);

  // fake submit for static form
  window.handleContactSubmit = function(e){
    e.preventDefault();
    alert('Grazie! Questo è un modulo statico dimostrativo.');
    return false;
  };
})();


  // header shrink on scroll
  document.addEventListener('scroll', function(){
    var sh = document.querySelector('.site-header');
    if (!sh) return;
    if (window.scrollY > 10) sh.classList.add('shrink'); else sh.classList.remove('shrink');
  });
