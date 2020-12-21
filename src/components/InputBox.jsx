import React from 'react';
import useInputState from './useInputState';

const InputBox = ({ socket, name }) => {
  console.log('socket===>', socket);
  const [newMessage, handleNewMessage, resetNewMessage] = useInputState('');

  const handleClick = (e) => {
    e.preventDefault();
    //emit message
    socket.emit('chatMessage', {
      user: name,
      text: newMessage,
    });

    resetNewMessage();
    console.log('the link is clicked');
  };

  return (
    <div className='form'>
      <input
        className='inputBox'
        type='text'
        placeholder='Type a message...'
        value={newMessage}
        onChange={handleNewMessage}
      />
      <button className='sendButton' onClick={handleClick}>
        Send
      </button>
    </div>
  );
};

export default InputBox;
