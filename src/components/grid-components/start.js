import React, { Component } from 'react';
import './start.css'
import { Link } from "react-router-dom"
import Grid from "../grid"

class Start extends Component {
    
    render() {

        return (
            <div id="start">
                <div id="instructions">
                <h3 id="instructionsHeader">Instructions</h3>
                <p id="instructionsPara">When you press start you will have 90 seconds to hit as many numbers as possible in ascending order. The last number will be your recorded score.</p>
                </div>
                <Link id="startButton" to="/grid/" component={Grid} onClick={this.props.reset}><span>Start</span></Link>
            </div>
        )
    }
}

export default Start;