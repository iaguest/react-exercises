import React from 'react'

import { MessageList } from './MessageList'
import { CreateMessage } from './CreateMessage'

export class ChatWindow extends React.Component {
  render() {
    return (
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.sender.username}</div>

            <MessageList sender={this.props.sender} messages={this.props.messages}/>
            <CreateMessage sender={this.props.sender} onAddMessage={this.props.onAddMessage}/>

          </div>
      );
  }
}
