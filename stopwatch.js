const watch = document.querySelector(".watchstop");
const startbtn = document.querySelector(".startbtn");
const stopbtn = document.querySelector(".stopbtn");
const resetbtn = document.querySelector(".resetbtn");


let startTime = 0;
let currentTime = 0;
let elapsedTime = 0;
let paused = true;
let interval;
let hrs = 0;
let minute = 0;
let second = 0;


startbtn.addEventListener("click",(a)=>{
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateTime, 1000);
    }
})

stopbtn.addEventListener("click",(a)=>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(interval);
    }
})

resetbtn.addEventListener("click",(a)=>{
    paused = true;
    clearInterval(interval);
    startTime = 0;
    currentTime = 0;
    elapsedTime = 0;
    interval;
    hrs = 0;
    minute = 0;
    second = 0;
    watch.textContent = "00 : 00 : 00";
})

function updateTime(){
    elapsedTime = Date.now() - startTime;

    second = Math.floor((elapsedTime / 1000) % 60);
    minute = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 *60)) % 60);

    hrs = pad(hrs);
    minute = pad(minute);
    second = pad(second);
    watch.textContent = `${hrs} : ${minute} : ${second}`;

    function pad(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}