import React, { Component} from 'react';

import { Button, Form, FormGroup, Row, Col, Container } from 'reactstrap';

import RockGreen from '../../assets/img/kivi_1.png'
import RockRed from '../../assets/img/kivi_2.png'
import ScissorsGreen from '../../assets/img/sakset_1.png'
import ScissorsRed from '../../assets/img/sakset_2.png'
import PaperGreen from '../../assets/img/paperi_1.png'
import PaperRed from '../../assets/img/paperi_2.png'

import Item from './Item/Item'

class Game extends Component {
    constructor(props) {
        super(props);
            this.state = {
                data: [{
                    playerSelection: null,
                    playerScore: 0,
                    computerSelection: null,
                    computerScore: 0
                }]
            }
    }

    componentDidMount () {
        //Start game
       
    }

    // Change state of current item and send data to game
    playerClickHandler = (playerSelectedItem) => {

        // console.log(playerSelectedItem)

        const updatedState = [...this.state.data]
       

        console.log(updatedState)

        // this.setState({ 
        //     data: [{
        //         playerSelection: playerSelectedItem,
        //     }]
        // });
    };

    // Play move for the computer
    computerMoveHandler = () => {

    }


    render() {

        // console.log(this.state)

        return(
            <Container>
                <h1>Game</h1>
                <Row>
                   <Item image={'rock-red'} xs="4" md="4" val="1"/>
                   <Item image={'scissor-red'} xs="4" md="4" val="2"/>
                   <Item image={'paper-red'} xs="4" md="4" val="3"/>
                </Row>
                <Row>
                    Game area
                </Row>
                <Row>
                   <Item image={'rock-green'} xs="4" md="4" val="1" playerClick={this.playerClickHandler}/>
                   <Item image={'scissor-green'} xs="4" md="4" val="2" playerClick={this.playerClickHandler}/>
                   <Item image={'paper-green'} xs="4" md="4" val="3" playerClick={this.playerClickHandler}/>
                </Row>
            </Container>
        );
    }
};

export default Game;