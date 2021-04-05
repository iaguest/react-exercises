import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {UserItem} from './UserItem'

export class UserItemList extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
  }
  
  state = {
    isShowNumGames: true,
  }

  toggleNumGamesDisplay = event => {
    this.setState((prevState) => ({
      isShowNumGames: !prevState.isShowNumGames
    }));
  }

  render() {
    return (
        <div>
          <h3>List Of Users</h3>
          <ol>
            { this.props.items.map((item, index) => {
              return <UserItem
                        key={item.userName}
                        isShowNumGames={this.state.isShowNumGames}
                        userName={item.userName}
                        numGames={item.numGames} />
            }) }
          </ol>
          <br />
          <br />
          <button
             className="smallButton"
             disabled={this.props.items.length===0}
             onClick={this.toggleNumGamesDisplay}>
            { (this.state.isShowNumGames)
               ? "Hide the Number of Games Played"
               : "Show the Number of Games Played"}
          </button>
        </div>
      );
  }
}
