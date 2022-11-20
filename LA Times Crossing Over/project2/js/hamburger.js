var burger = document.getElementById('burger');
var offscreenNav = document.getElementById('offscreen-nav');
var closeBtn = document.getElementById('close-btn');

burger.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);

function openNav(){
  offscreenNav.style.width = '100%';
  offscreenNav.style.transition = '0.2s linear';
}
function closeNav(){
  offscreenNav.style.width = '0%';
  offscreenNav.style.transition = '0.2s linear';
}