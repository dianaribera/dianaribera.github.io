const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5776715&units=imperial&appid=3738fdc9983f5ba04c511ad6a0cc5685';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    document.getElementById('current-cond').textContent = jsObject.weather[0].description;
    document.getElementById('temperature').textContent = Math.round(jsObject.main.temp) + "°F";
    document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
    document.getElementById('windSpeed').textContent = jsObject.wind.speed +" mph";

    const temp = jsObject.main.temp;
    const speed = jsObject.wind.speed;
    const result = windChill(temp, speed)

    function windChill(t, s) {
        let compute = 35.74 + (0.6215 * t) - 35.75 * Math.pow(s, 0.16) + (0.4275 * t * Math.pow(s, 0.16));
        let total = Math.round(compute);
        return total; 
    }

    if ((temp > 50) || (speed < 3)) {
        document.getElementById("windChillOutput").innerHTML = "NA";
    } else {
        document.getElementById("windChillOutput").innerHTML = result + "&deg;F";
    }
  });

  const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5776715&units=imperial&appid=3738fdc9983f5ba04c511ad6a0cc5685';

  fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    var forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let day = 0; day < forecast.length; day++) {
      const d = new Date(forecast[day].dt_txt);
      document.getElementById(`day${day+1}`).textContent = days[d.getDay()];

      const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
      const desc = forecast[day].weather[0].description;
      document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
      document.getElementById(`icon${day+1}`).setAttribute('alt', desc);

      document.getElementById(`temp${day+1}`).textContent = Math.round(forecast[day].main.temp) + '°F';
    }

    document.getElementById('day').innerHTML = day[current.getDay()];

  });