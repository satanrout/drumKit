const clap = document.getElementsByClassName('clap');
const rows = document.querySelectorAll('.row');


function start(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.row[data-key = "${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}



function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove("playing");
}


rows.forEach(row => row.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', start);