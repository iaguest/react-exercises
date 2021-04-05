import React from 'react'
import {Message} from './Message'

export class MessageList extends React.Component {

  render() {
    return (
            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <Message
                   key={index}
                   isSender={this.props.sender.username === message.username}
                   message={message} />
              ))}
            </ul>
      );
    }
}