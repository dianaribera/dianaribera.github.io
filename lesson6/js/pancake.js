document.getElementById("currentDate").innerHTML = day[current.getDay()] +
    ", " + current.getDate() + " " + month[current.getMonth()] + ", " +
    current.getFullYear();

    
if (current.getDay() == 5) {
    document.getElementById("breakfast").style.display = "block";
}