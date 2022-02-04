// This is where The Magic starts.
const http = require('http')
let app = http.createServer()

console.log('Your project is running... nerd.');

const Game = require('./src/Game');

app.listen(3000, '127.0.0.1')

const game = new Game()

game.start()
