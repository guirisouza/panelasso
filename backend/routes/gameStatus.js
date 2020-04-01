const express = require('express');
const router  = express.Router();
const Game = require('../models/game')

router.get('/countdonw', (req, res)=>{
    const game = Game.find({activity: true})
    .exec()
    .then(game => {
        res.status(200).json({result: game})
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

module.exports = router;