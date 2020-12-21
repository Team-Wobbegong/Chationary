import React from 'react';
import Message from './Message';

const Messages = ({ messages, name }) => {
  console.log('Messages Component props.messages =>', messages);
  console.log('Messages Component props.name =>', name);
  return (
    <div className="messages">
      {messages.map((message, i) => (
        <div key={`message-${i}`}>
          <Message message={message} name={name} />
        </div>
      ))}
    </div>
  );
};

export default Messages;

