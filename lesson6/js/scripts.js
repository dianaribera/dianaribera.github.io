function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

var current = new Date();
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("currentDate").innerHTML = day[current.getDay()] +
    ", " + current.getDate() + " " + month[current.getMonth()] + ", " +
    current.getFullYear();

    
function pancakes() {
    var now = new Date();
    var dayOfWeek = now.getDate();
    var show = document.getElementById('breakfast');

    if (dayOfWeek == 5) {
        show.style.display = (show.style.display == 'block') ? 'none' : 'block';
        }
        else {
            show.style.display = (show.style.display == 'none') ? 'block' : 'none';
        }
}