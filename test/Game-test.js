const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data');

describe('Game', function() {
  let card1
  let card2
  let card3
  let deck
  let round
  let game

  beforeEach(() => {
    card1 = new Card(1, 'Can you propagate a plant without a leaf if it has a node?', ['usually, yes', 'usually, no', 'only in water'], 'usually, yes');
    card2 = new Card(2, 'How often should you water your plants?', ['everyday', 'on a schedule', 'it depends'], 'it depends');
    card3 = new Card(3, 'Houseplants should always be planted in soil', ['yes!', 'no!'], 'no!');
    card4 = new Card(3, 'Houseplants can thrive in a low light environment', ['yes!', 'no!'], 'no!')
    deck = new Deck([card1,card2,card3])
    round = new Round(deck)
    game = new Game(deck)
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {expect(game).to.be.an.instanceof(Game);
  });

  it(`Should have a method that to create new cards`, function() {
    game.createCards()
    expect(game.allCards[0].id).to.equal(1)
  })

  it('Should create a new deck at the start of the game', () => {
    game.createCards()
    game.createDeck()
    console.log(game.deck)
    expect(game.deck.cards[1].id).to.equal(2);
  })

  it(`Should keep track of the current round`, function() {
    game.createCards()
    game.createDeck()
    game.start()

    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});


// invokes printMessage to display the message in the CLI
// invokes printQuestion to kick off our helper functions that allow interaction via the CLI
