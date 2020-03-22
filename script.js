const rows = document.querySelectorAll('.row');



function start(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.row[data-key = "${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

/*********************************************************************
this code is really ineffeicient so please someone improve it
**********************************************************************/
const clap = document.querySelector('.clap');
const hihat = document.querySelector('.hihat');
const kick = document.querySelector('.kick');
const openhat = document.querySelector('.openhat');
const boom = document.querySelector('.boom');
const ride = document.querySelector('.ride');
const snare = document.querySelector('.snare');
const tom = document.querySelector('.tom');
const tink = document.querySelector('.tink');

const aclap = document.querySelector('.clap1');
const ahihat = document.querySelector('.hihat1');
const akick = document.querySelector('.kick1');
const aopenhat = document.querySelector('.openhat1');
const aboom = document.querySelector('.boom1');
const aride = document.querySelector('.ride1');
const asnare = document.querySelector('.snare1');
const atom = document.querySelector('.tom1');
const atink = document.querySelector('.tink1');

clap.addEventListener('click',function() {
  if(!aclap) return;
  aclap.currentTime = 0;
  aclap.play();
  clap.classList.add('playing');
});

hihat.addEventListener('click',function() {
  if(!ahihat) return;
  ahihat.currentTime = 0;
  ahihat.play();
  hihat.classList.add('playing');
});

kick.addEventListener('click',function() {
  if(!akick) return;
  akick.currentTime = 0;
  akick.play();
  kick.classList.add('playing');
});

openhat.addEventListener('click',function() {
  if(!aopenhat) return;
  aopenhat.currentTime = 0;
  aopenhat.play();
  openhat.classList.add('playing');
});

boom.addEventListener('click',function() {
  if(!aboom) return;
  aboom.currentTime = 0;
  aboom.play();
  boom.classList.add('playing');
});

ride.addEventListener('click',function() {
  if(!aride) return;
  aride.currentTime = 0;
  aride.play();
  ride.classList.add('playing');
});

snare.addEventListener('click',function() {
  if(!asnare) return;
  asnare.currentTime = 0;
  asnare.play();
  snare.classList.add('playing');
});

tom.addEventListener('click',function() {
  if(!atom) return;
  atom.currentTime = 0;
  atom.play();
  tom.classList.add('playing');
});

tink.addEventListener('click',function() {
  if(!atink) return;
  atink.currentTime = 0;
  atink.play();
  tink.classList.add('playing');
});


/*********************************************************************
this code is really ineffeicient so please someone improve it
**********************************************************************/

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove("playing");
};


rows.forEach(row => row.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', start);