let [milliseconds, seconds, minutes] = [0, 0, 0];
let timerRef = document.querySelector('.timer');
let int;

document.getElementById('button-start').addEventListener('click', () => {
  if (!int) {
    clearInterval(int);
  }
  int = setInterval(timer, 10);
});

document.getElementById('button-pause').addEventListener('click', () => {
  clearInterval(int);
});

document.getElementById('button-reset').addEventListener('click', () => {
  clearInterval(int);
  [seconds, minutes] = [0, 0, 0];
  timerRef.innerHTML = '00 : 00 : 0000';
});

function timer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  let ms =
    milliseconds < 10
      ? '00' + milliseconds
      : milliseconds < 100
      ? '0' + milliseconds
      : milliseconds;

  timerRef.innerHTML = `${m} : ${s} : ${ms}`;
}
