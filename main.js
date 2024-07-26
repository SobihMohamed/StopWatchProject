// let handler = setTimeout(function(){
//     alert("welcome after 3s");
// },3000);


// let stopp=document.getElementById("but");

// stopp.addEventListener("click", ()=>{
//     clearTimeout(handler);
//     alert("stoped")
// })

let hours=0;
let minutes=0;
let seconds=0;
let milliSeconds=0;
let interval=null;
const hours_container = document.getElementById("hours");
const minutes_container = document.getElementById("minutes");
const seconds_container = document.getElementById("seconds");
const milliSeconds_container = document.getElementById("milliSeconds");

const start = document.getElementById("start");
const reset = document.getElementById("reset");
const stopp = document.getElementById("stop");


const stratTimer=()=>{
    clearInterval(interval);
    interval=setInterval(startWatch,10);
}

const stopTimer=()=>{
    clearInterval(interval);
}

const resetTimer=()=>{
    milliSeconds=0;
    seconds=0;
    minutes=0;
    hours=0;

    hours_container.innerHTML="00";
    minutes_container.innerHTML="00";
    seconds_container.innerHTML="00";
    milliSeconds_container.innerHTML="00";
    clearInterval(interval);
}

function startWatch(){
    milliSeconds++;
    if(milliSeconds<9){
        milliSeconds_container.innerHTML=`0${milliSeconds}`;
    }else if(milliSeconds<100){
         milliSeconds_container.innerHTML=`${milliSeconds}`;
    }
    else{
        milliSeconds_container.innerHTML=`00`;
        milliSeconds=0;
        seconds++;
    }

    if(seconds<10){
        seconds_container.innerHTML=`0${seconds}`;
    }else if(seconds<60){
         seconds_container.innerHTML=`${seconds}`;
    }
    else{
        seconds_container.innerHTML=`00`;
        seconds=0;
        minutes++;
    }

    if(minutes<10){
        minutes_container.innerHTML=`0${minutes}`;
    }else if(seconds<60){
         minutes_container.innerHTML=`${minutes}`;
    }
    else{
        minutes_container.innerHTML=`00`;
        minutes=0;
        hours++;
    }

    if(hours<10){
        hours_container.innerHTML=`0${hours}`;
    }else{
         hours_container.innerHTML=`${hours}`;
    }
}
start.addEventListener("click",stratTimer);
stopp.addEventListener("click",stopTimer);
reset.addEventListener("click",resetTimer);