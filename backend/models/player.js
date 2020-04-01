const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    gameRef: { type: Schema.Types.ObjectId, ref: 'Game' },
    email: String,
    name: String,
    hits: Number,
    avaregeHits: Number,
    state: String
})

const Player = mongoose.model('Player', PlayerSchema);
module.exports = Player