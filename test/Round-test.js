
const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let card1
  let card2
  let card3
  let deck
  let round

  beforeEach(() => {
    card1 = new Card(1, 'Can you propagate a plant without a leaf if it has a node?', ['usually, yes', 'usually, no', 'only in water'], 'usually, yes');
    card2 = new Card(2, 'How often should you water your plants?', ['everyday', 'on a schedule', 'it depends'], 'it depends');
    card3 = new Card(3, 'Houseplants should always be planted in soil', ['yes!', 'no!'], 'no!');
    card4 = new Card(3, 'Houseplants can thrive in a low light environment', ['yes!', 'no!'], 'no!')
    deck = new Deck([card1,card2,card3])
    round = new Round(deck)
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1)
  });

  it('Should have a method, takeTurn, to update turns count', function() {
    round.takeTurn()
    round.takeTurn()
    round.takeTurn()

    expect(round.turnCount).to.equal(3)
  })

  it('should start with a turn of 0', function() {
    expect(round.turn).to.equal(0)
  })

  it('should start with no incorrect guesses', function() {
    expect(round.wrongGuess).to.be.an('array');
  })

  it('The next card should become current card', function() {
    round.takeTurn()
    round.takeTurn()

    expect((round.deck.cards[round.turnCount].id -1)).to.equal(round.turnCount)
  })

  it('should evaluate guesses', function() {
    round.takeTurn('usually, yes')
    expect(round.isCorrect).to.equal(true)
    round.takeTurn('usually, no')
    expect(round.isCorrect).to.equal(false)
  })

  it('should store incorrect guesses', function() {
    round.takeTurn('usually, yes')
    round.takeTurn('everyday')
    round.takeTurn('yes!')

    expect(round.wrongGuess.length).to.equal(2)
  })

  it('should be able to give feedback', function() {
    expect(round.takeTurn('usually, yes')).to.deep.equal('correct!')
  });

  it('should calculate the percentage of correct answers', function() {
    round.takeTurn('usually, no')
    round.takeTurn('it depends')


    expect(round.calculatePercentCorrect()).to.equal(50)
  });
  it('should be able to end the round', function () {
    round.takeTurn('usually, no')
    round.takeTurn('it depends')

    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`)
  })
  // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
});


//The turns count is updated, regardless of whether the guess is correct or incorrect
// The next card becomes current card
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
// Feedback is returned regarding whether the guess is incorrect or correct

// calculatePercentCorrect: method that calculates and returns the percentage of correct guesses
// endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
