import React, { Component } from 'react';
import API from './VocabAPI';
import Chat from './Chat';

export default class ChatBoard extends Component {
  render() {
    return (
      <div className='ChatBoard'>
        This is our ChatBoard Component
        <API />
        <Chat />
      </div>
    );
  }
}
