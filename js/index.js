
const gameDiv = document.querySelector("#game")
const cardsUrl = "http://localhost:3000/cards"
// const cardGrid = document.querySelector(".card-grid")

// getLevelOne()
getLevelTwo()

function getLevelOne() {
    return fetch(cardsUrl)
    .then(resp => resp.json())
    .then(cards => cards.filter(card => card.level === 1)
    .forEach(card => renderCard(card)))
}

function getLevelTwo() {
    return fetch(cardsUrl)
    .then(resp => resp.json())
    .then(cards => cards.filter(card => card.level === 2)
    .forEach(card => renderCard(card)))
}

function renderCard(card) {
    const cardGrid = document.querySelector(".card-grid")
    let cardDiv = document.createElement("div")
    let backImg = document.createElement('img')
    backImg.src = 'images/cardBack.jpg'
    backImg.className = "back-image"
    cardDiv.className = "card"
    cardDiv.dataset.name = card.name
    let cardImg = document.createElement("img")
    cardImg.src = card.image_src
    cardImg.className = "front-image"
    cardDiv.append(cardImg, backImg)
    cardGrid.appendChild(cardDiv)
    cardDiv.addEventListener('click', function flipCard(e) {
        // alert("you clicked me!")
        e.target.parentNode.classList.toggle('flip')
        if (e.target.src === card.image_src) {
            e.target.src = backImg.src
        } if (e.target.src === backImg.src) {
            e.target.src = card.image_src
        } 
        // e.target.src = card.image_src
    })
}

let allCards = document.querySelectorAll('.card')
console.log(allCards)

// console.log(allCards)
// let levelOneCards = allCards.filter(card => card.level === 1)
// console.log(levelOneCards)
// let levelTwoCards = allCards.filter(card => card.level === 2)
// let levelThreeCards = allCards.filter(card => card.level ===3)



