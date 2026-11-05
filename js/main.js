(function(){
  var desktop=window.matchMedia('(min-width:901px)');
  var btn=document.getElementById('menu-btn'),nav=document.getElementById('nav');
  function sync(){ if(desktop.matches){nav.hidden=false;} }
  btn.addEventListener('click',function(){var open=nav.hidden;nav.hidden=!open;btn.setAttribute('aria-expanded',String(open));});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'&&!desktop.matches){nav.hidden=true;btn.setAttribute('aria-expanded','false');}});
  window.addEventListener('resize',sync);sync();

  // Vidéo du hero : coupée si l'utilisateur limite les animations, retirée si le fichier manque
  var video=document.getElementById('hero-video'),toggle=document.getElementById('video-toggle');
  if(video){
    var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var source=video.querySelector('source');
    if(source)source.addEventListener('error',function(){video.remove();if(toggle)toggle.hidden=true;});
    if(reduce){video.removeAttribute('autoplay');video.pause();}
    video.addEventListener('playing',function(){if(toggle){toggle.hidden=false;toggle.textContent='Pause';}});
    if(toggle)toggle.addEventListener('click',function(){
      if(video.paused){video.play();toggle.textContent='Pause';}else{video.pause();toggle.textContent='Lecture';}
    });
  }

  // Formulaire : envoi réel via Netlify Forms une fois en ligne, mode aperçu ailleurs
  var form=document.getElementById('contact-form'),msg=document.getElementById('form-msg');
  if(form)form.addEventListener('submit',function(e){
    if(/netlify\.app$|gillymotorsport|^gmc\.peakcl\.com$/.test(location.hostname))return;
    e.preventDefault();
    msg.textContent="Aperçu : l'envoi du formulaire sera actif à la mise en ligne du site.";
    msg.hidden=false;
  });

  // Fil Instagram Elfsight : chargé seulement si un identifiant de widget est renseigné
  var feed=document.getElementById('insta-feed');
  var appId=feed&&feed.getAttribute('data-app-id');
  if(appId){
    feed.innerHTML='<div class="elfsight-app-'+appId+'" data-elfsight-app-lazy></div>';
    var s=document.createElement('script');
    s.src='https://elfsightcdn.com/platform.js';s.async=true;
    document.body.appendChild(s);
  }
})();
