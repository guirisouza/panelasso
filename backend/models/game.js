const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    playerOne: String,
    playerTwo: String,
    countdown: Date,
    startGame: Date,
    endGame: Date,
})

const Game = mongoose.model('Game', GameSchema);
module.exports = Game