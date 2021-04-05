import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class CreateUserItem extends Component {

  static propTypes = {
    onAddUser: PropTypes.func.isRequired,
    userNames: PropTypes.instanceOf(Set).isRequired
  }
  
  state = {
    firstName: '',
    lastName: '',
    userName: ''
  }
  
  handleFirstNameChange = value => { this.setState((prevState) => ( { firstName: value })); }
  handleLastNameChange = value => { this.setState((prevState) => ( { lastName: value })); }
  handleUserNameChange = value => { this.setState((prevState) => ( { userName: value })); }

  onSubmit = event => {
    event.preventDefault()
    console.log('In onSubmit');
    this.props.onAddUser( {...this.state} );
    
    this.setState((prevState) => ({
      firstName: '',
      lastName: '',
      userName: ''
    }));
  }

  isUserNameError() {
    return this.props.userNames.has(this.state.userName);
  }

  render() { return(
      <div>
        <form onSubmit={ this.onSubmit }>
          <label>
            First Name:
            <input className="input-name" type="text" value={this.state.firstName} onChange={
              (event) => {this.handleFirstNameChange(event.target.value);} }/></label>
          <label>
            Last Name:
            <input className="input-name" type="text" value={this.state.lastName} onChange={
              (event) => {this.handleLastNameChange(event.target.value);} }/></label>
          <label>
            User Name:
            <input className={ (this.isUserNameError()) ? "input-name error" : "input-name" }
                   type="text" value={this.state.userName}
                   onChange={(event) => {this.handleUserNameChange(event.target.value);}}/></label>
          <button
             className="smallButton"
             disabled={ !(this.state.firstName &&
                          this.state.lastName &&
                          this.state.userName) ||
                          this.isUserNameError() }>Add</button>
        </form>
      </div>
    );
  }
}
