// const { validationResult } = require('express-validator/check');

const db = require('./rps-models')

// Home >> API Descriptions
exports.getIndex = ('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});