// const { validationResult } = require('express-validator/check');

const db = require('./rps-models')

// API Home >> API Descriptions
exports.getIndex = (req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.send(new Buffer('<h2>API description...</h2>'));
  };

// Logic for giving points
exports.postScore = (req, res, next) => {

    const data = req.body.data;
    const playerSelection = req.body.data.playerSelection;
    const computerSelection = req.body.data.computerSelection;
    const dif = Math.abs(playerSelection - computerSelection);

    const smaller = playerSelection < computerSelection ? 'playerScore' : 'computerScore';
    const bigger = smaller === 'playerScore' ? 'computerScore' : 'playerScore';

    // Check that there are answers
    if (playerSelection && computerSelection) {
        // Check for tie
        if (dif === 0) {
            data.message = "It's a tie. No points given"
            return res.status(200).json({
                data: data,
            });
        }

        // Check for smaller to win
        if (dif === 1) {
            data.message = `Point goes for ${smaller === 'playerScore' ? 'you' : 'computer'}`;
            data[smaller] += 1;
            return res.status(201).json({
                data: data,
            }); 
        }

        // Check for larger to win
        if (dif === 2) {
            data.message = `Point goes for ${bigger === 'playerScore' ? 'you' : 'computer'}`;
            data[bigger] += 1;
            return res.status(201).json({
                data: data,
            }); 
        } 
        
    } else {
        data.message = "Oops... Did you forget to make a selection?"
        return res.status(200).json({
            data: data,
        }); 
    }
}