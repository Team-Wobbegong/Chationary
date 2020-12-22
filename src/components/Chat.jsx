import React, { useState, useEffect } from 'react';

import Messages from './Messages';
import InfoBar from './InfoBar';
import InputBox from './InputBox';
import useSocket from './useSocket';

const Chat = ({ match }) => {
  const { name, room } = match.params;
  // console.log(match.params);
  const [messages, sendNewMessage] = useSocket(name, room);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendNewMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className="chatOuterContainer">
      <div className="chat">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <InputBox
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
};
export default Chat;
