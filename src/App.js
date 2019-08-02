import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Grid from "./components/grid"
import Result from "./components/grid-components/result.js"
import Start from "./components/grid-components/start"
import { shuffle, randomNumbers } from './components/grid-components/random';


class App extends React.Component {

  //currentNumber is the score, clicked is the last box clicked and grid is a shuffled array of numbers between 0 and 99 located in the random.js file.
  state = {
    currentNumber: -1,
    clicked: false,
    grid: shuffle(randomNumbers)
  }

  //This clickHandler updates the number state and changes the colour of the selected box to green.
  clickHandler = (number) => {
    if (number === this.state.currentNumber + 1) {

      this.setState({ currentNumber: number, clicked: true })
    }
  }

  //This function rests the score and shuffles the grid when the try again link on the result page is clicked.
  resetScore = () => {
    this.setState({ currentNumber: -1, clicked: false, grid: shuffle(randomNumbers) })
  }

  render() {
    return (
      <div className="container">
        <Router>
          <h1 id="numberGridHeader">Number Grid</h1>
          <Route id="start" exact path="/" render={() => <Start />}></Route>
          <Route id="grid" exact path="/grid" render={() => <Grid clicked={this.state.clicked} currentNumber={this.state.currentNumber} click={this.clickHandler} numbers={this.state.grid} />} />
          <Route id="result" exact path="/grid/result" render={() => <Result reset={this.resetScore} currentNumber={this.state.currentNumber} />} />
        </Router>
      </div>
    );
  }
}

export default App;
