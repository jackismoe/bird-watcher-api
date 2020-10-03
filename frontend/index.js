document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/sightings')
    .then(response => response.json())
    .then(jsonResponse => process(jsonResponse))
})
let birdName
let birdSpecies
let birdLat
let birdLong

let body = document.querySelector('body')
let container = document.createElement('div')
let birdNameEl = document.createElement('h2')
let birdSpeciesEl = document.createElement('h3')
let birdLocation = document.createElement('p')

container.id = 'container'
birdNameEl.id = 'bird-name'
birdSpeciesEl.id = 'bird-species'
birdLocation.id = 'last-seen'

body.appendChild(container)

const process = (arrayOfObjects) => {
  for (let x of arrayOfObjects) {
    
    birdName = x.bird.name
    birdSpecies = x.bird.species
    birdLat = x.location.latitude
    birdLong = x.location.longitude

    birdNameEl.innerText = `Name: ${birdName}`
    birdSpeciesEl.innerText = `Species: ${birdSpecies}`
    birdLocation.innerText = `Last seen at ${birdLat}, ${birdLong}`

    container.appendChild(birdNameEl)
    birdNameEl.appendChild(birdSpeciesEl)
    birdNameEl.appendChild(birdLocation)
  }
}


