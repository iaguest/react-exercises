import React from 'react';

export class ProductProvider extends React.Component {

  state = {
    value: '',
  };
  
  handleChange = event => {
    this.setState({ value: event.target.value });
  };  

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.value);
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  render() {
    return (
        <form onSubmit={ this.handleSubmit }>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>);
  }
}

