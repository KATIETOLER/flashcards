const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Deck = require('./Deck');
const Card = require('./Card');
const Turn = require('./turn');


class Game {
  constructor(deck) {
    this.deck = deck;
    this.allCards = [];
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.deckCount()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
    util.main(round);
  }
  start() {
    this.createCards()
    this.createDeck()
    this.currentRound = new Round(this.deck)
    this.printQuestion(this.currentRound)
    this.printMessage(this.deck,this.currentRound)
  }
  createCards() {
    prototypeQuestions.forEach(card => {
      this.allCards.push(new Card(card.id, card.question, card.answers, card.correctAnswer))
    })
  }
  createDeck() {
    this.deck = new Deck(this.allCards)
  }
}

module.exports = Game;
