import React from 'react';
// import useInputState from './useInputState';

const InputBox = ({
  room,
  newMessage,
  setNewMessage,
  handleSendMessage,
  setTypingMsg,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    } else {
      setTypingMsg();
    }
  };

  return (
    <div className='form'>
      <input
        className='inputBox'
        type='text'
        placeholder='Type a message...'
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className='sendButton' onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default InputBox;
