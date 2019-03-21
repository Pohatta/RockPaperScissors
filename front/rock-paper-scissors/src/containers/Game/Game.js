import React, { Component, Fragment} from 'react';

import { Button, Row, Col, Container, Alert } from 'reactstrap';

import Item from './Item/Item'

class Game extends Component {
    constructor(props) {
        super(props);
            this.state = {
                data: {
                    playerSelection: null,
                    playerScore: 0,
                    computerSelection: null,
                    computerScore: 0,
                    secondsRemaining: 0,
                    gameOver: false,
                    message: ''
                }
            }
    }

    // New round
    startGame = () => {
        this.reduceSecond();
        this.interval = setInterval(this.reduceSecond, 1000);   
    }

    // Reset time before next round
    resetRound = () => {

        const updatedData = {
            ...this.state.data,
            secondsRemaining: 5,
            playerSelection: null,
            computerSelection: null,
            message: ''
        }

        this.setState({
            data: updatedData
        }, () => {
            this.startGame();
        });

    }

    // Change state of current item and send data to game
    playerClickHandler = (playerSelectedItem) => {

        const playerSelection = parseInt(playerSelectedItem)

        const updatedData = {
            ...this.state.data,
            playerSelection: playerSelection
        }
       
        this.setState({
            data: updatedData
        });

    };

    // Play move for the computer
    computerMoveHandler = () => {

        const randomComputerSelection = Math.floor(Math.random() * 3) + 1
        
        const updatedData = {
            ...this.state.data,
            computerSelection: randomComputerSelection
        }
       
        this.setState({
            data: updatedData
        });
    }

    // Timer for the game
    reduceSecond = () => {

        if (this.state.data.secondsRemaining > 0 ) {

            const updatedData = {
                ...this.state.data,
                secondsRemaining: this.state.data.secondsRemaining - 1
            }

            this.setState({
                data: updatedData
            });

        } else {

            this.computerMoveHandler();
            clearInterval(this.interval);
            this.countPoints();
        }
    }

    countPoints = () => {

        const url = 'http://localhost:3006/api/v1/post-score';
        const data = {data: this.state.data};

        fetch(url, {

            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            if (response) {

                const playerScore = response.data.playerScore;
                const computerScore = response.data.computerScore;
                const message = response.data.message;

                const updatedData = {
                    ...this.state.data,
                    playerScore: playerScore,
                    computerScore: computerScore,
                    message: message
                }
    
                this.setState({
                    data: updatedData
                });
            }

        })
        .then(nothing => {
            //Check for a winner
            if (this.state.data.playerScore === 3 || this.state.data.computerScore === 3) {

                const updatedData = {
                    ...this.state.data,
                    gameOver: true
                }
            
                this.setState({
                    data: updatedData
                });
            }
        })
        .catch(error => console.error('Error:', error));
    }

    // New game
    resetGame = () => {

        const updatedData = {
            ...this.state.data,
            playerSelection: null,
            playerScore: 0,
            computerSelection: null,
            computerScore: 0,
            secondsRemaining: 5,
            gameOver: false,
            message: ''
        }

        this.setState({
            data: updatedData
        }, () => {
            this.startGame();
        });

    }


    render() {

        // Show button text depending on game state
        let magicButton;
        magicButton = <Button onClick={this.resetRound} color="primary" size="lg">Start</Button>
        if (this.state.data.playerScore > 0 || this.state.data.computerScore > 0 ) {
            magicButton = <Button onClick={this.resetRound} color="primary" size="lg">Next round</Button>
        } 

        // Show timer if game is on, else score
        let centerArea;
        centerArea = <Col xs="12">{magicButton}</Col>
        if (this.state.data.secondsRemaining > 0) {
            centerArea = (
                <Fragment>
                    <Col xs="12"><p className="h3">Select before time runs out!</p></Col>
                    <Col xs="12"><p className="h2">{this.state.data.secondsRemaining}</p></Col>
                </Fragment>
            )
        }
        // If game is over, show score
        if (this.state.data.gameOver) {
            centerArea = (
                <Fragment>
                    <Col xs="12" className="text-center my-3 border-bottom">
                        <h1>We have a winner!</h1>
                        <h2>Score</h2>
                        <p className="lead"><strong> You: {this.state.data.playerScore} </strong></p>
                        <p className="lead"><strong> Computer: {this.state.data.computerScore} </strong></p> 
                    </Col>
                    <Col xs="12" className="text-center my-4">
                        <p className="lead"><strong> Winner is: {this.state.data.computerScore === 3 ? 'Computer' : 'You'} </strong></p>
                    </Col>
                    <Col xs="12" className="text-center">
                        <Button onClick={this.resetGame} color="primary" size="lg">Play again?</Button>
                    </Col>
                </Fragment>
            )
        }

        // Show message
        let message;
        if (this.state.data.message && !this.state.data.gameOver) {
            message = <Col xs="12" className="my-3"><Alert color="success">{this.state.data.message}</Alert></Col>
        }

        // Show board only if game is on
        let computerBoard;
        let playerBoard;
        
        computerBoard = (
            <Fragment>
                <Row><Col xs="12" className="text-center"><p className="h3">Computer: {this.state.data.computerScore}</p></Col></Row>
                <Row>
                    <Item image={'rock-red'} xs="4" md="4" val="1" selected={this.state.data.computerSelection === 1 ? true : false}/>
                    <Item image={'scissor-red'} xs="4" md="4" val="2" selected={this.state.data.computerSelection === 2 ? true : false}/>
                    <Item image={'paper-red'} xs="4" md="4" val="3" selected={this.state.data.computerSelection === 3 ? true : false}/>
                </Row>
            </Fragment>
        )
        playerBoard = (
            <Fragment>
                <Row>
                    <Item image={'rock-green'} xs="4" md="4" val="1" playerClick={this.playerClickHandler} selected={this.state.data.playerSelection === 1 ? true : false}/>
                    <Item image={'scissor-green'} xs="4" md="4" val="2" playerClick={this.playerClickHandler} selected={this.state.data.playerSelection === 2 ? true : false}/>
                    <Item image={'paper-green'} xs="4" md="4" val="3" playerClick={this.playerClickHandler} selected={this.state.data.playerSelection === 3 ? true : false}/>
                </Row>
                <Row><Col xs="12" className="text-center"><p className="h3">You: {this.state.data.playerScore}</p></Col></Row>
            </Fragment>
        )

        if (this.state.data.gameOver) {
            computerBoard = null;
            playerBoard = null;
        }
        
        return(
            <Container>
                <Col xs="10" md="8">
                    <Col xs="12" className="text-center my-2 border-bottom">
                        <h1>Rock, Paper, Scissors</h1>
                        <p className="lead"><strong> (Best out of Five) </strong></p>
                    </Col>
                        {computerBoard}
                    <Row className="text-center my-3">
                        {centerArea}
                        {message}
                    </Row>
                        {playerBoard}
                </Col>
            </Container>
        );
    }
};

export default Game;