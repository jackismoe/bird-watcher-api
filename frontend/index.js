document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/sightings')
    .then(response => response.json())
    .then(jsonResponse => process(jsonResponse))
})


const process = (arrayOfObjects) => {
  for (let x in arrayOfObjects) {
    let container = document.createElement('div')
    let birdNameEl = document.createElement('h2')
    let birdSpeciesEl = document.createElement('h3')
    let birdLocation = document.createElement('p')

    container.id = 'container'
    birdNameEl.id = 'bird-name'
    birdSpeciesEl.id = 'bird-species'
    birdLocation.id = 'last-seen'

    let newBird = arrayOfObjects[x]
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
}

let body = document.querySelector('body')