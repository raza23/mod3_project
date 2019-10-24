const body = document.querySelector('body')
const gameDiv = document.querySelector("#game")
const cardsUrl = "http://localhost:3000/cards"
const cardGrid = document.querySelector(".card-grid")
const navDiv = document.querySelector('#navigation')
let shuffleButton = document.createElement('button')
shuffleButton.className = 'shuffle-button'
shuffleButton.innerText = 'Re-shuffle'
navDiv.style="width:100%; height:10%; border: none"
navDiv.appendChild(shuffleButton)

let flippedCards = 0
let currentLevelCards = []

// getLevelOneCards()
// getLevelTwoCards()
getLevelThreeCards()
// let numberOfCards;

shuffleButton.addEventListener('click', function(e) {
    let cardGrid = document.querySelector(".card-grid")
    removeChildren(cardGrid)
    shuffleCards(currentLevelCards).forEach(card => renderCard(card))
})

function removeChildren(parentNode) {
    while(parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild)
    }
}

const clickCounter = document.querySelector('.clicks')
const timer = document.querySelector('.timer')
// const cardGrid = document.querySelector(".card-grid")

function getAllCards() {
    return fetch(cardsUrl)
    .then(resp => resp.json())
}

function getLevelOneCards() {
    getAllCards()
    .then(function(cards) {
        let filteredCards = cards.filter(card => card.level === 1)
        let doubled = filteredCards.concat(filteredCards)
        shuffleCards(doubled)
        .forEach(card => {
            renderCard(card)
            currentLevelCards.push(card)
        })
    })
}

function getLevelTwoCards() {
    getAllCards()
    .then(function(cards) {
        let filteredCards = cards.filter(card => card.level === 2)
        let doubled = filteredCards.concat(filteredCards)
        shuffleCards(doubled)
        .forEach(card => {
            renderCard(card)
            currentLevelCards.push(card)
        })
    })
}

function getLevelThreeCards() {
    getAllCards()
    .then(function(cards) {
        let filteredCards = cards.filter(card => card.level === 3)
        let doubled = filteredCards.concat(filteredCards)
        shuffleCards(doubled)
        .forEach(card => {
            renderCard(card)
            currentLevelCards.push(card)
        })
    })
}

function shuffleCards(cards) {
    clickAndTimerReset()
    return cards.sort(() => 0.5 - Math.random())
}

function clickAndTimerReset(){
    watch.stop()
    watch.reset()
    clickCount = 0
    timer.textContent='Timer: 00 : 00 . 000'
    clickCounter.textContent=`Clicks: ${clickCount}`
    timerIsOn = false;
}

function renderCard(card) {
    const cardGrid = document.querySelector(".card-grid")
    let cardDiv = document.createElement("div")
    let backImg = document.createElement('img')
    backImg.src = 'images/octocat2.png'
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

let count = 0;
let firstCard, secondCard;

function flipCard(e) {
    
    if (count === 0){
        count++;
        firstCard = this;
        this.classList.add('flip');
        // debugger;
    } else if (count === 1){
        count++;
        secondCard = this;
        this.classList.add('flip');
        if (firstCard.dataset.name === secondCard.dataset.name){
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            flippedCards += 2;
            count = 0;
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                count = 0
            }, 1200)
        }
    }

}

let clickCount = 0;
let watch = new Timer(timer);
let timerIsOn = false;

clickCounter.textContent = `Clicks: ${clickCount}`
document.addEventListener('click', function(e){
    console.log(e.target)
    if (e.target.className === 'back-image' && !timerIsOn){
        // debugger;
        clickCount++
        clickCounter.textContent = `Clicks: ${clickCount}`
        timerIsOn = true
        watch.start()
    } else if (e.target.className === 'back-image'){
        // debugger;
        clickCount++
        clickCounter.textContent = `Clicks: ${clickCount}`
        if (currentLevelCards.length === flippedCards){
            watch.stop()
        }
    }
})




  

  
