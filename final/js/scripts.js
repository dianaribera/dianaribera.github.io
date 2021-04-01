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

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

var x = document.lastModified;
document.getElementById("dateLastModified").innerHTML = x;

function initMap() {
    // The location of Uluru
    const kaysville = { lat: 41.035, lng: -111.937 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: kaysville,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: kaysville,
      map: map,
    });
  }