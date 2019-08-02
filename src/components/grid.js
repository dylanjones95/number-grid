import React, { Component } from 'react';
import './grid.css';
import Timer from './grid-components/timer';

class Grid extends Component {
    //Maps through the array 
    render() {

        return (
            <div id="gridContainer">

                {this.props.numbers.map((num) => {
                    return (
                        <button
                            className={this.props.clicked && (num === this.props.currentNumber) ? "numberBoxClicked" : "numberBox"} onClick={() => this.props.click(num)} >{num}
                        </button>
                    )
                }
                )}
                <div id="timeRemaining">
                    <Timer currentNumber={this.props.currentNumber} />
                </div>
            </div>
        )
    }
}

export default Grid;