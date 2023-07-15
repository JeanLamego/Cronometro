const minutesEl= document.getElementById("minutes");
const secondsEl= document.getElementById("seconds");
const millisecondsEl= document.getElementById("milliseconds");
const startBtn= document.getElementById("startBtn");
const pauseBtn= document.getElementById("pauseBtn");
const resumeBtn= document.getElementById("resetBtn");
const resetBtn= document.getElementById("resetBtn");

var interval;
var minutes=0;
var seconds=0;
var milliseconds=0;
var isPaused = false;

startBtn.addEventListener("click", startTimer);

function startTimer(){
interval = setInterval(() =>{
    if (!isPaused){
        milliseconds +=10
    }
},10)

}
