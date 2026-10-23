console.log("JS IS CONNECTED")

let catButton = document.querySelector("#catFacts")
let cats = document.querySelector("#cats")

catButton.addEventListener("click", getCatFact)

function getCatFact() {
  fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      cats.innerText = data.fact
    })
     .catch(err => {
      console.log("error " + err)
    })
}

let dogButton = document.querySelector("#dogImage")
let dog = document.querySelector("#dogs")

dogButton.addEventListener("click", getDawgImage)

function getDawgImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
  .then (res => res.json())
  .then (data => {
    console.log(data)
    dog.src = data.message
  })
   .catch(err => {
      console.log("error " + err)
    })

}

let randomJokes = document.querySelector("#randomJoke")
let pasteJoke = document.querySelector("#joke")

randomJokes.addEventListener("click", jokeGenerator)

function jokeGenerator() {
  fetch("https://v2.jokeapi.dev/joke/Any")
  .then (res => res.json())
  .then (data => {
    console.log(data)
    if(data.type === "single") {
      pasteJoke.innerText = data.joke
    } else {
      pasteJoke.innerText = data.setup + " " + data.delivery
    }
    })
    .catch(err => {
      console.log("error " + err)
    })
    
}