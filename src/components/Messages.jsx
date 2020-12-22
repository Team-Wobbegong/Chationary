import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({ messages, name }) => {
  // console.log('Messages Component props.messages =>', messages);
  // console.log('Messages Component props.name =>', name);
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={`message-${i}`}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
