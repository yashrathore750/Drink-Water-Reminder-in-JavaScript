console.log("We are at drink_water");

function startTime(){

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
    if (m == 31 && s < 05) {
        // document.body.style.backgroundColor = "red";
        alert("It's your time to drink water");
    }
    // document.body.style.backgroundColor = "white";
}

function checkTime(i){
    if (i<10) {
        i = "0" + i;
    }
    return i ;
}