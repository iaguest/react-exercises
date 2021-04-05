import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {UserItemList} from './UserItemList'
import {CreateUserItem} from './CreateUserItem'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
    users: [],
  }

  onAddUser = user => {
    this.setState((prevState) => ({
      users: [...prevState.users, { ...user, numGames: 0 }]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <CreateUserItem
           onAddUser={this.onAddUser}
           userNames={new Set(this.state.users.map((user) => user.userName))}/>
        <UserItemList items={this.state.users} />
      </div>
    );
  }
}

export default App;
