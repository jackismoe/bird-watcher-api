fetchUrl = 'http://localhost:3000/sightings'

let body = document.querySelector('body')

document.addEventListener('DOMContentLoaded', () => {
  fetch(fetchUrl)
    .then(response => response.json())
    .then(jsonResponse => process(jsonResponse))
})

const process = (object) => {
  if (object instanceof Array) {
    for (let x in object) {
      let container = document.createElement('div')
      let birdNameEl = document.createElement('h2')
      let birdSpeciesEl = document.createElement('h3')
      let birdLocation = document.createElement('p')

      container.id = 'container'
      birdNameEl.id = 'bird-name'
      birdSpeciesEl.id = 'bird-species'
      birdLocation.id = 'last-seen'

      let newBird = object[x]
      let birdName = newBird.bird.name
      let birdSpecies = newBird.bird.species
      let birdLat = newBird.location.latitude
      let birdLong = newBird.location.longitude

      birdNameEl.innerText = `Name: ${birdName}`
      birdSpeciesEl.innerText = `Species: ${birdSpecies}`
      birdLocation.innerText = `Last seen at ${birdLat}, ${birdLong}`

      container.appendChild(birdNameEl)
      container.appendChild(birdSpeciesEl)
      container.appendChild(birdLocation)
      body.appendChild(container)
    }
  } else {
     let container = document.createElement("div");
     let birdNameEl = document.createElement("h2");
     let birdSpeciesEl = document.createElement("h3");
     let birdLocation = document.createElement("p");

     container.id = "container";
     birdNameEl.id = "bird-name";
     birdSpeciesEl.id = "bird-species";
     birdLocation.id = "last-seen";

     let birdName = object.bird.name;
     let birdSpecies = object.bird.species;
     let birdLat = object.location.latitude;
     let birdLong = object.location.longitude;

     birdNameEl.innerText = `Name: ${birdName}`;
     birdSpeciesEl.innerText = `Species: ${birdSpecies}`;
     birdLocation.innerText = `Last seen at ${birdLat}, ${birdLong}`;

     container.appendChild(birdNameEl);
     container.appendChild(birdSpeciesEl);
     container.appendChild(birdLocation);
     body.appendChild(container);
  }
}

// need to add functionality for showing individual sightings; dropdown menu