const minutesEl= document.getElementById("minutes");
const secondsEl= document.getElementById("seconds");
const millisecondsEl= document.getElementById("milliseconds");
const startBtn= document.querySelector("#startBtn");
const pauseBtn= document.getElementById("pauseBtn");
const resumeBtn= document.getElementById("resumeBtn");
const resetBtn= document.getElementById("resetBtn");

let interval;
let minutes=0;
let seconds=0;
let milliseconds=0;
let isPaused = false;

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);

function startTimer(){
interval = setInterval(() =>{
    if (!isPaused){
        milliseconds +=10;

        if(milliseconds===1000){
            seconds++;
            milliseconds=0;
        }
            
            if(seconds===60){
                minutes++;
                seconds=0;
            }
            minutesEl.textContent=formatTime(minutes);
            secondsEl.textContent=formatTime(seconds);
            millisecondsEl.textContent=formatMilliseconds(milliseconds);
    }
    },10)
    startBtn.style.display='none';
        pauseBtn.style.display='block';

}

function pauseTimer(){
    isPaused=true;
}

function formatTime(time){
    return time<10 ? `0${time}` : time;

}

function formatMilliseconds(time){
    return time<100 ? `${time}`.padStart(3, "0") : time;
}


