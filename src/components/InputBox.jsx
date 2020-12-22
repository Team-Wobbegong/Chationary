import React from 'react';

const InputBox = ({
  newMessage,
  setNewMessage,
  sendNewMessage,
  setTypingMsg,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    } else {
      setTypingMsg();
    }
  };

    const handleSendMessage = (e) => {
      console.log('handleSendMessage!');
      e.preventDefault();
      sendNewMessage(newMessage);
      setNewMessage('');
    };

  return (
    <div className="form">
      <input
        className="inputBox"
        type="text"
        placeholder="Type a message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="sendButton" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default InputBox;
