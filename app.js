function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    //se hora for 0, considere 12
    if(h == 0){
        h = 12;
    }
    
    //se hora maior que 12, zera horário e adiciona session pm
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    //hora, min, sec com 2 casas, como "02":"04":"08"
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
