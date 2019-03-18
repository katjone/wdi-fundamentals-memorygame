
//Cards
var cards = ["queen", "queen", "king", "king"];

//Cards in Play
var cardsInPlay = [];

//Selected Cards
var cardOne = cards[0];
var cardTwo = cards[2];


//Add to cardsInPlay array
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

//Does it show up?
console.log("User flipped ", cardOne);
console.log("User flipped ", cardTwo);

//Game Logic
if (cardsInPlay.length === 2) {
    console.log("Two cards selected.");
}
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("Matching Cards!");
} else {
    alert("Try again!");
}