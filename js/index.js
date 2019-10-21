const gameDiv = document.querySelector("#game")
const cardsUrl = "http://localhost:3000/cards"
// const cardGrid = document.querySelector(".card-grid")

getCards()

function getCards() {
    return fetch(cardsUrl)
    .then(resp => resp.json())
    .then(cards => cards.forEach(card => renderCard(card)))
    // console.log(cards)
}

function renderCard(card) {
    const cardGrid = document.querySelector(".card-grid")
    let cardDiv = document.createElement("div")
    cardDiv.className = "card"
    cardDiv.dataset.name = card.name
    let cardImg = document.createElement("img")
    cardImg.src = card.image_src
    cardDiv.appendChild(cardImg)
    cardGrid.appendChild(cardDiv)
    cardDiv.addEventListener('click', function flipCard(e) {
        // alert("you clicked me!")
        e.target.parentNode.classList.toggle('flip')
    })
}



