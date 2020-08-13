const {ipcRenderer} = require("electron")

let submit = document.querySelector(".submit-time");
let workTimeInput = document.querySelector("#Work-time")
let breakTimeInput = document.querySelector("#Break-time")

submit.addEventListener("click",()=>{
    let workTime = workTimeInput.value;
    let breakTime = breakTimeInput.value;
    let time = [workTime,breakTime]
    ipcRenderer.send("Timer",time);
})







