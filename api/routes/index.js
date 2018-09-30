const express = require('express');
const router = express.Router();

const { STATIC_CARS, AVAILABILITY_OPTIONS } = require('../constants')


const getRandomIndex = max => {
  return Math.floor((Math.random() * max));
}

router.get('/cars', function (_, res, _) {
  res.send(JSON.stringify(STATIC_CARS));
});

router.get('/availability', function (_, res, _) {
  res.send(JSON.stringify({
    available: AVAILABILITY_OPTIONS[getRandomIndex(AVAILABILITY_OPTIONS.length)]
  }));
});

module.exports = router;