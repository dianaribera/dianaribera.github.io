const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const preston = document.querySelector('.preston');
    const prestonfilter = towns.filter(x => x.name == "Preston");
    prestonfilter.forEach(townpreston => {
        let town = document.createElement('section');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let h4 = document.createElement('h4');
        
        h3.innerHTML = `${townpreston.name}`;
        p.innerHTML = `${townpreston.motto}`;
        h4.innerHTML = `Year Founded: ${townpreston.yearFounded} <br> 
                        Population: ${townpreston.currentPopulation}<br> 
                        Annual Rain Fall: ${townpreston.averageRainfall}`;
        town.append(h3);
        town.append(p);
        town.append(h4);
        preston.append(town);
    });


    const sodasprings = document.querySelector('.sodasprings');
    const sodafilter = towns.filter(x => x.name == "Soda Springs");
    sodafilter.forEach(townsoda => {
        let town = document.createElement('section');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let h4 = document.createElement('h4');
        
        h3.innerHTML = `${townsoda.name}`;
        p.innerHTML = `${townsoda.motto}`;
        h4.innerHTML = `Year Founded: ${townsoda.yearFounded}<br> 
                        Population: ${townsoda.currentPopulation}<br> 
                        Annual Rain Fall: ${townsoda.averageRainfall}`;
        town.append(h3);
        town.append(p);
        town.append(h4);
        sodasprings.append(town);
    });

    const fishhaven = document.querySelector('.fishhaven');
    const fishhavenfilter = towns.filter(x => x.name == "Fish Haven");
    fishhavenfilter.forEach(townfish => {
        let town = document.createElement('section');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let h4 = document.createElement('h4');
        
        h3.innerHTML = `${townfish.name}`;
        p.innerHTML = `${townfish.motto}`;
        h4.innerHTML = `Year Founded: ${townfish.yearFounded}<br> 
                        Population: ${townfish.currentPopulation}<br> 
                        Annual Rain Fall: ${townfish.averageRainfall}`;
        town.append(h3);
        town.append(p);
        town.append(h4);
        fishhaven.append(town);
    });

});