import React from 'react';
import useInputState from './useInputState';

const InputBox = () => {
  const [newMessage, handleNewMessage, resetNewMessage] = useInputState('');

  return (
    <div className='form'>
      <input
        className='inputBox'
        type='text'
        placeholder='Type a message...'
        value={newMessage}
        onChange={handleNewMessage}
      />
      <button className='sendButton' onClick={resetNewMessage}>
        Send
      </button>
    </div>
  );
};

export default InputBox;
