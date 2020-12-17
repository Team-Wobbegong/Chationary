import React, { Component } from 'react';
import API from './API';
import InputForm from './InputForm';
import Messages from './Messages';

export default class ChatBoard extends Component {
  render() {
    return (
      <div>
        This is our ChatBoard Component
        <API />
        <Messages />
        <InputForm />
      </div>
    );
  }
}
