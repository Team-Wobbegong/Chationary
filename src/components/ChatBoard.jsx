import React, { Component } from 'react';
import API from './API';
import Chat from './Chat';

export default class ChatBoard extends Component {
  render() {
    return (
      <div>
        This is our ChatBoard Component
        <API />
        <Chat />
      </div>
    );
  }
}
