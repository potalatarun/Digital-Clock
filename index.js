
const hourel = document.getElementById("hours");

const minutesel= document.getElementById("minutes");

const secondsel = document.getElementById("seconds");

const ampel = document.getElementById("ampm");

function updateclock(){
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = "AM";
    if(hour>12){
        ampm="PM";
        hour=hour-12;
    }   
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute = "0"+minute;
    }
    if(second<10){
        second = "0"+second;
    }
    hourel.innerText=hour;
    minutesel.innerText=minute;
    secondsel.innerText=second;
    ampel.innerText=ampm;
    setTimeout(()=>{
        updateclock()
    },1000);
}

updateclock();  