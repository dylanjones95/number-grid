import React, { Component } from 'react';
import './result.css'
import { Link } from "react-router-dom"
import Grid from "../grid"

class Result extends Component {

    
    
    render() {

        return (
            <div id="result">
                <div id="score">
                { this.props.currentNumber === -1
                    ? <h3>Result: 0</h3>
                    : <h3>Result: {this.props.currentNumber}</h3>
                }
                </div>
                <div id="tryAgain">
                <Link id="tryAgainButton" to="/grid/" component={Grid} onClick={this.props.reset}><span>Try Again</span></Link>
                </div>
            </div>
        )
    }
}

export default Result;