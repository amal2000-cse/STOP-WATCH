//here we are declaring the variables
let [second, minute, hour] = [0, 0, 0];
var display=document.getElementById("display");
let timer=null;

//in this function it will start the timer
function stopWatch() {
    second++;
    if (second  === 60) {
        second = 0;
        minute++;
        if (minute === 60) {
            minute = 0;
            hour++;
        }
    }
    //to display the time in two digits
    let hrs=(hour<10) ? "0"+hour : hour;
    let min=(minute<10) ? "0"+minute : minute;
    let sec=(second<10) ? "0"+second : second;

 
    display.innerHTML=hrs+":"+min+":"+sec;
}
//in this function setInterval will call the function stopWatch every 1000 milliseconds
function start(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopWatch, 1000);
}
//this function will stop the timer

function stop(){
    clearInterval(timer);
    timer=null;
}
//this function will reset the timer

function reset(){
    clearInterval(timer);
    timer=null;
    [second, minute, hour] = [0, 0, 0];
    display.innerHTML="00:00:00";
}