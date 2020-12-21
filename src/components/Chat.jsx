import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Messages from './Messages';
import InfoBar from './InfoBar';
import InputBox from './InputBox';

let socket;
const endpoint = 'localhost:8080';

const Chat = ({ match }) => {
  const { name, room } = match.params;
  // console.log(match.params);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log('useEffect is fired!');

    socket = io(endpoint);
    // Add callback?
    socket.emit('join', { name, room });

    return () => {
      // // BAD, will throw an error?
      // socket.emit('disconnect');
      // socket.off();
    };
  }, [endpoint, name, room]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message]);
    });
    // figure out what to listen ???
  });

  return (
    <div className="chatOuterContainer">
      <div className="chat">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <InputBox newMessage={newMessage} setNewMessage={setNewMessage} />
      </div>
    </div>
  );
};
export default Chat;
