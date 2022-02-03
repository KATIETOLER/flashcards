const Turn = require('./turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turn = 0;
    this.turnCount = 0
    this.wrongGuess = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turnCount]
  }

  takeTurn(playerGuess) {
    const turn = new Turn(playerGuess,     this.returnCurrentCard())
    let result = turn.evaluateGuess()
    this.turnCount++
    if(turn.evaluateGuess() === false) {
      this.wrongGuess.push(this.turnCount)
    }
    return result
  }
}


module.exports = Round
