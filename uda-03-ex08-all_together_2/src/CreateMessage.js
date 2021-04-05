import React from 'react'

export class CreateMessage extends React.Component {
  
  state = {
    messageText: ''
  }
  
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.messageText.length === 0;
  };

  handleMessageTextChange = updatedText => {
    console.log('In handleMessageTextChange...')
    this.setState((prevState)=>({
      messageText: updatedText
    }));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddMessage({ username: this.props.sender.username, text: this.state.messageText});
    this.setState((prevState)=>({
      messageText: ''
    }));
  }

  render() {
    return (
              <form className="input-group" onSubmit={ this.handleSubmit }>
                <input
                   className="form-control"
                   type="text"
                   value={this.state.messageText}
                   placeholder="Enter your message..."
                   onChange={(event) => {this.handleMessageTextChange(event.target.value);}} />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()}>
                    SEND
                  </button>
                </div>
              </form>
      );
  }
}