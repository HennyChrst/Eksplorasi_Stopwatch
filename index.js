var timer;
var ele = document.getElementById('timer');
var startButton = document.getElementById('start-button');

function startTimer() {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  timer = setInterval(()=>{
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    }
    ele.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, 1000) 
}

startButton.addEventListener('click', startTimer);

function pause(){
  clearInterval(timer);
}