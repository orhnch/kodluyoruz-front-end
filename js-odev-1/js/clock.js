let myName = prompt("Adınız?: ")
let adiniz = document.querySelector("#myName")


adiniz.innerHTML = myName;

function showTime(){
    const daysinWeek=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let time =new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let day = daysinWeek[time.getDay()];
    document.getElementById("myClock").innerHTML=`${hour}:${min}:${sec} ${day}`
}
setInterval(showTime,1000);