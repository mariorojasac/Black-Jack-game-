// when rendering game, set first card and second card to random numbers

let firstCard = getRandomCard()
let secondCard = getRandomCard()

// set a list of cards in an array to a variable name cards
let cards = [firstCard, secondCard]

// adding first and second cards 
let sumOfCards = firstCard + secondCard

// setting hasBlackJack to false
let hasBlackJack = false

// setting to check if player is in game to true
let isAlive = true

// setting messageto empty string 
let message = ""

// getting  elements by id and setting it to a variable
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

// player object
let player = {
  name: "Mario",
  chips: "145"
}

// Starting Game function calling another function that renders game
function startGame() {
  renderGame()
}

// game code
// Getting random number 
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

// game logic 
function renderGame() {
  if (sumOfCards <= 20) {
    message = "Do you want to take another card?"
  } else if (sumOfCards === 21) {
    message = "You've Got Black Jack"
    hasBlackJack = true
  } else {
    message = "Sorry you're out"
    isAlive = false
  }
  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sumOfCards
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " / "
  }
}

// calling random number function and pusing to array of cards and then running game logic 
function getNewCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard()
    console.log(newCard)
    sumOfCards = sumOfCards + newCard
    cards.push(newCard)
    renderGame()
  }
}

// preset player name and money amount
playerEl.textContent = player.name + ": $" + player.chips