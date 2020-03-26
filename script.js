const rows = document.querySelectorAll('.row');



function start(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`.row[data-key = "${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
};

/** selects the instrument and the according audio element in an array. [instrument, audio] */
const getInstrument = name => [
  document.querySelector(`.${name}`),
  document.querySelector(`.${name}1`),
];
/* List of all Instrument names */
const allInstruments = ['clap', 'hihat', 'kick', 'openhat', 'boom', 'ride', 'snare', 'tom', 'tink'];

/* Loop through all instruments and select their elements in the DOM */
const allInstrumentTuples = allInstruments.map(getInstrument);

/* Loop through all instrument tuples and attach an event listener to the instrument */
allInstrumentTuples.forEach(([instrument, audio]) => {
  instrument.addEventListener('click',function() {
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    instrument.classList.add('playing');
  });
});


function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove("playing");
};


rows.forEach(row => row.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', start);
