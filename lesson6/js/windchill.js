
let temp = parseFloat(document.getElementById("temperature").textContent);
let speed = parseFloat(document.getElementById("windSpeed").textContent);
let result = windChill(temp, speed)

function windChill(t, s) {
    let compute = 35.74 + (0.6215 * t) - 35.75 * Math.pow(s, 0.16) + (0.4275 * t * Math.pow(s, 0.16));
    let total = Math.round(compute);
    return total; 
}

if ((temp > 50) || (speed < 3)) {
    document.getElementById("windChillOutput").innerHTML = "None";
} else {
    document.getElementById("windChillOutput").innerHTML = result + "&deg;F";
}