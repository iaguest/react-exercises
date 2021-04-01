import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Equation } from './Equation'

class App extends Component {
   
  state = {
    eqn: this.generateEquation(),
    numQuestions: 0,
    numCorrect: 0,
  }

  generateEquation() {
    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    let z = Math.floor(Math.random() * 100);
    let p = Math.floor(Math.random() * 3) + x + y + z;  
    return { x: x, y: y, z: z, p: p }
  }

  isValidEquation(eqn) {
    return eqn.x + eqn.y + eqn.z === eqn.p;
  }

  onButtonClick(userAnswer) {
    console.log("userAnswer:", userAnswer);
    let isValidEquation = this.isValidEquation(this.state.eqn);
    console.log("isValidEquation:", isValidEquation);
    this.setState((currentState) => ({
      eqn: this.generateEquation(),
      numQuestions: currentState.numQuestions + 1,
      numCorrect: (userAnswer === isValidEquation) ? currentState.numCorrect + 1 : currentState.numCorrect
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Equation eqn={this.state.eqn} />
          <button onClick={ ()=>{this.onButtonClick(true)} }>True</button>
          <button onClick={ ()=>{this.onButtonClick(false)} }>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
