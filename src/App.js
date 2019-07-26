import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Grid from "./components/grid"
import Result from "./components/grid-components/result.js"
import Start from "./components/grid-components/start"

class App extends React.Component {

  state = {
    currentNumber: -1,
    clicked: false
}

clickHandler = (number) => {
  if (number === this.state.currentNumber + 1) {
 
  this.setState({currentNumber: number, clicked: true}) 
}
}

resetScore = () => {
  this.setState({currentNumber: -1, clicked: false})
}

render() {
  return (
    <div className="container">
      <Router>
      <h1 id="numberGridHeader">Number Grid</h1>
      <Route id="start" exact path="/" render={() => <Start/>}></Route>
      {/* <Route path="/" exact component={LogIn} /> */}
      <Route id="grid" exact path="/grid" render={() => <Grid clicked = {this.state.clicked} currentNumber = {this.state.currentNumber} click = {this.clickHandler}/>} />
      <Route id="result" exact path="/grid/result" render={() => <Result reset = {this.resetScore}currentNumber = {this.state.currentNumber} />} />
      </Router>
    </div>
  );
}
}

export default App;
