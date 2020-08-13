const {ipcRenderer,remote} = require("electron")
const closeButton = document.querySelector("#close");
const currentWindow = remote.getCurrentWindow();
const audio = new Audio('Alarm-ringtone.mp3');



ipcRenderer.on("time",(event,args)=>{
    let [workTime,breakTime] = args
        Timer(workTime,breakTime);
    
})

closeButton.addEventListener("click",()=>{
    currentWindow.close();
})


function Timer(minutes,breakMinutes,iteration){
    document.getElementById("info").innerHTML = "Work on the task!";
    var countDownDate = new Date(new Date().getTime() + minutes*60000);
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance <= 0) {
        clearInterval(x);
        audio.play();
        BreakTimer(breakMinutes,iteration);
    }
    }, 1000);
    
}




function BreakTimer(minutes,iteration){
    document.getElementById("info").innerHTML = "Take a break.";
    var countDownDate = new Date(new Date().getTime() + minutes*60000);
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance <= 0) {
            clearInterval(x);
            currentWindow.close()
        }
    }, 1000);
}