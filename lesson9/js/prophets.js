const requestURL = '';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (directory) {
    const prophets = directory['prophets'];
    console.table(directory);  // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        card.appendChild(h2);

        p.innerHTML = 'Date of Birth: ' + prophets[i].birthdate + '<br>' + 'Place of Birth: ' + prophets[i].birthplace;
        card.appendChild(p);

        img.setAttribute('src', prophets[i].imageurl);
        img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);
 
    }
  });