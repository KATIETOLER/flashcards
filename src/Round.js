const Turn = require('./turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turn = 0;
    this.turnCount = 0
    this.correct = 0
    this.wrongGuess = [];
    this.isCorrect = true;
  }
  returnCurrentCard() {
    return this.deck.cards[this.turnCount]
  }

  takeTurn(playerGuess) {
    const turn = new Turn(playerGuess,     this.returnCurrentCard())
    this.turnCount++
    if(turn.evaluateGuess() === false) {
      this.wrongGuess.push(this.turnCount)
      this.isCorrect = false;
      return 'incorrect!'
    }
    this.correct++
    this.isCorrect = true;
    return 'correct!'
  }
  calculatePercentCorrect() {
    const amnt = (this.turnCount - this.wrongGuess.length) / this.turnCount

    const sum = Math.floor(amnt * 100)
    return sum
  }
  endRound() {
    const resultMsg = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    console.log(resultMsg)
    return resultMsg

  }
}


module.exports = Round
