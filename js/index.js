
const gameDiv = document.querySelector("#game")
const cardsUrl = "http://localhost:3000/cards"
const clickCounter = document.querySelector('.clicks')
// const cardGrid = document.querySelector(".card-grid")

// getLevelOne()
getLevelTwo()

function getLevelOne() {
    return fetch(cardsUrl)
    .then(resp => resp.json())
    .then(function(cards) {
        let filteredCards = cards.filter(card => card.level === 1)
        filteredCards.concat(filteredCards).sort(() => 0.5 - Math.random()).forEach(card => renderCard(card))
    })
}

function getLevelTwo() {
    return fetch(cardsUrl)
    .then(resp => resp.json())
    .then(function(cards) {
        let filteredCards = cards.filter(card => card.level === 2)
        let doubled = filteredCards.concat(filteredCards)
        // doubled.sort(() => 0.5 - Math.random())
        // .forEach(card => renderCard(card))
        shuffleCards(doubled)
        .forEach(card => renderCard(card))
    })
}

function shuffleCards(cards) {
    return cards.sort(() => 0.5 - Math.random())
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
    cardDiv.addEventListener('click', flipCard)
}

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(e) {
    this.classList.add('flip');
    
    if (!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
        // debugger;
    } else {
        hasFlippedCard = false;
        secondCard = this;
        if (firstCard.dataset.name === secondCard.dataset.name){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
            }, 1200)
        }
    }
    
}


let clickCount = 0
clickCounter.textContent = `Clicks: ${clickCount}`
document.addEventListener('click', function(e){
    console.log(e.target)
    if (e.target.className === 'back-image'){
        clickCount++
        clickCounter.textContent = `Clicks: ${clickCount}`
    }
})








  

  
