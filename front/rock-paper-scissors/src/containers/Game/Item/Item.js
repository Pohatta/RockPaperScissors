import React, { Component} from 'react';

import { Col } from 'reactstrap';

import RockGreen from '../../../assets/img/kivi_1.png'
import RockRed from '../../../assets/img/kivi_2.png'
import ScissorsGreen from '../../../assets/img/sakset_1.png'
import ScissorsRed from '../../../assets/img/sakset_2.png'
import PaperGreen from '../../../assets/img/paperi_1.png'
import PaperRed from '../../../assets/img/paperi_2.png'

class Game extends Component {
    constructor(props) {
        super(props);
            this.state = {
                selected: this.props.selected,
            }
    }

    // Change state of current item and send data to game
    gameItemClickHandler = () => {

        this.setState({ 
            selected: !this.state.selected,
        });

        this.props.playerClick(this.props.val)
    };


    render() {

        // Add classes to game item
        const classes = ['game-item'];

        // If selected
        if (this.props.selected) {
            classes.push('selected')
        }

        //Select correct image & action
        let imgSource;
        let click;
        switch(this.props.image) {
            case 'rock-red':
                imgSource = RockRed;
                click = null;
                break;
            case 'scissor-red':
                imgSource = ScissorsRed;
                click = null;
                break;
            case 'paper-red':
                imgSource = PaperRed;
                click = null;
                break;
            case 'rock-green':
                imgSource = RockGreen;
                click = () => this.gameItemClickHandler();
                classes.push('player');
                break;
            case 'scissor-green':
                imgSource = ScissorsGreen;
                click = () => this.gameItemClickHandler();
                classes.push('player');
                break;
            case 'paper-green':
                imgSource = PaperGreen;
                click = () => this.gameItemClickHandler();
                classes.push('player');
                break;
            default:
                imgSource = RockRed;
        }

        return(
            <Col xs={this.props.xs} md={this.props.md}>
                <img src={imgSource} alt="" className={classes.join(' ')} onClick={click}></img>
            </Col>
        );
    }
};

export default Game;