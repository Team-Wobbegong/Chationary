import React from 'react';

const InputBox = ({ newMessage, setNewMessage }) => (
  <form className="form">
    <input
      className="inputBox"
      type="text"
      placeholder="Type a message..."
      value={newMessage}
      onChange={(e) => setNewMessage(e.target.value)}
    />
    <button className="sendButton">Send</button>
  </form>
);

export default InputBox;
