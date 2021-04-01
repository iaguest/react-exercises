import React, { Component } from 'react';

export class TextMirror extends Component {
  
  state = {
    text: ''
  };
 
  updateText = updatedText => {
    this.setState((currentState) => ({
      text: updatedText
    }));
  }

  render() {
    return (
        <div className="container">
          <input
            type="text"
            placeholder="Say Something"
            value={this.state.text}
            onChange={ (event) => this.updateText(event.target.value) }/>
          { this.state.text.length > 0 && (
              <div>
                <p className="echo">Echo:</p>
                <p>{ this.state.text }</p>
              </div>
          )}
        </div>
      );
  }
}
