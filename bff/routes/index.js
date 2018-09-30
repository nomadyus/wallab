const express = require('express');
const router = express.Router();

const apiService = require('../services/apiService')

router.get('/', function(_, res, _) {
  apiService.getInventory((response) => {
    res.send(JSON.stringify(response));
  });
});

module.exports = router;
