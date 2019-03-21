const router = require('express').Router()

const controller = require('./rps-controller')


// Get index
router.get('/', controller.getIndex);

//Post score
router.post('/post-score', controller.postScore);

module.exports = router;