import React from 'react';
import './scss/Message.scss';

export class Message extends React.Component {
  render() {
    const { text, author } = this.props;
    return (

      <div>
        <span>{author}: {text}</span>
      </div>
    )
  }
}