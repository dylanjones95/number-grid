import React, { Component } from 'react';
// import { shuffledNumber } from './grid-components/random';
import './grid.css'
import Timer from './grid-components/timer'

class Grid extends Component {

    render() {


        return (
            <div id="gridContainer">
                

                {this.props.numbers.map((num) => {
                    return (
                        <button 
                        className={this.props.clicked && (num === this.props.currentNumber) ? "numberBoxClicked": "numberBox"}  onClick={() => this.props.click(num)} >{num} 
                        </button>
                    )
                }
                )}
                {console.log(this.props.currentNumber)}
                <div id="timeRemaining">
                <Timer currentNumber={this.props.currentNumber}/>
                </div>
            </div>
        )
    }
}

export default Grid;