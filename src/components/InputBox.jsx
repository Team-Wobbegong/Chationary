import React from 'react';
import useInputState from './useInputState';

const InputBox = ({ newMessage, setNewMessage, handleSendMessage }) => {
  return (
    <div className="form">
      <input
        className="inputBox"
        type="text"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? handleSendMessage(e) : null)}
      />
      <button className="sendButton" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default InputBox;
