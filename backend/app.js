const express = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

PORT = 5000

app.listen(PORT, function () {
  console.log(`App is running on ${PORT}`);
});

// Middleware Setup
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb', extended: true }));
app.use(cookieParser());

const cors = require('cors');
app.use(cors())

const gameStatus = require('./routes/gameStatus')

app.use('/status', gameStatus)

module.exports = app