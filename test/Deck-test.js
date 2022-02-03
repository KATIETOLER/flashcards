const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');
const Turn = require('../src/turn');
const Deck = require('../src/Deck');


describe('Deck', function() {
  let card1
  let card2
  let card3
  let deck

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'How often should you water your plants?', ['everyday', 'on a schedule', 'it depends'], 'it depends');
    card3 = new Card(3, 'Houseplants should always be planted in soil', ['yes!', 'no!'], 'no!');
    deck = new Deck([card1,card2,card3])
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should know how many cards are in the array', function() {
    expect(deck.deckCount()).to.equal(deck.cards.length)
  })

});
