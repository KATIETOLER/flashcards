const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round');
const Card = require('./Card');
const Turn = require('./turn');
const Deck = require('./Deck');


class Game {
  constructor(deck) {
    this.deck = deck;
    this.allCards = [];
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
    util.main(round);
  }
  start() {
    this.createCards()
    this.createDeck()
    this.currentRound = new Round(this.deck)
    this.printQuestion(this.deck, this.currentRound)
    this.printMessage(this.currentRound)
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
