
class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  deckCount() {
    return this.cards.length;
  }
}

module.exports = Deck;
