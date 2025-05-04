var hr = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

function timer() {
    const date = new Date();

    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();

    var hh = hh+(mm/60);
    var hrRotationDegree = `calc(${hh}*30deg)`;
    var minRotationDegree = `calc(${mm}*6deg)`;
    var secRotationDegree = `calc(${ss}*6deg)`;
    hr.style.transform = "rotate(" + hrRotationDegree + ")";
    min.style.transform = "rotate(" + minRotationDegree + ")";
    sec.style.transform = "rotate(" + secRotationDegree + ")";
}

setInterval(timer, 1000);