const express = require('express');

const router = express.Router();
const controller = require('./rps-controller')


// Get index
router.get('/', controller.getIndex);

module.exports = router;