import React from 'react'

export class Message extends React.Component {

  render() {
    return (
      <li
        className={this.props.isSender ? 'message sender' : 'message recipient'}
      >
        <p>{`${this.props.message.username}: ${this.props.message.text}`}</p>
      </li>
    );
  }
}
