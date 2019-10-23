
const gameDiv = document.querySelector("#game")
const cardsUrl = "http://localhost:3000/cards"
const clickCounter = document.querySelector('.clicks')
const timer = document.querySelector('.timer')
// const cardGrid = document.querySelector(".card-grid")

getLevelOne()
// getLevelTwo()

function getLevelOne() {
    return fetch(cardsUrl)
    .then(resp => resp.json())
    .then(function(cards) {
        let filteredCards = cards.filter(card => card.level === 1)
        let doubled = filteredCards.concat(filteredCards)
        shuffleCards(doubled)
        .forEach(card => renderCard(card))
    })
}

function getLevelTwo() {
    return fetch(cardsUrl)
    .then(resp => resp.json())
    .then(function(cards) {
        let filteredCards = cards.filter(card => card.level === 2)
        let doubled = filteredCards.concat(filteredCards)
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


let clickCount = 0;
let watch = new Timer(timer);

clickCounter.textContent = `Clicks: ${clickCount}`
document.addEventListener('click', function(e){
    console.log(e.target)
    let timerIsOn = false;
    if (e.target.className === 'back-image' && !timerIsOn ){
        clickCount++
        clickCounter.textContent = `Clicks: ${clickCount}`
        timerIsOn = true
        watch.start()
    } else if (e.target.className === 'back-image'){
        clickCount++
        clickCounter.textContent = `Clicks: ${clickCount}`
    }
})


function Timer(elem){
    let time = 0;
    let interval;
    let offset;

    function update(){
        time += timePassed();
        var formattedTime = formatter(time);
        elem.textContent = 'Timer: ' +formattedTime;
    }
    function timePassed(){
        let now = Date.now();
        let timePassedBy = now - offset;
        offset = now
        return timePassedBy;
    }
    function formatter(timeInMilliseconds){
        let clock  = new Date(timeInMilliseconds);
        let minutes = clock .getMinutes().toString();
        let seconds = clock .getSeconds().toString();
        let milliseconds = clock .getMilliseconds().toString();

        if (minutes.length < 2){
            minutes = '0' + minutes;
        }

        if (seconds.length < 2){
            seconds = '0' + seconds;
        }

        while (milliseconds.length < 3){
            milliseconds = '0'+ milliseconds
        }

        return minutes + ' : ' + seconds + ' . ' + milliseconds
    }

    this.isOn = false;
    this.start = function(){
        if (!this.isOn){
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    };
    this.stop = function(){
        if (this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    this.reset = function(){
        time = 0;
    };
}

 








  

  
