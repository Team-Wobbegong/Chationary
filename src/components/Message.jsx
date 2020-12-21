import React from 'react';

const Message = ({ message, name }) => {
  // console.log('Message Component props.messages.text =>', message.text);
  // console.log('Message Component props.messages.user =>', message.user);
  // console.log('Message Component props.name =>', name);
  console.log('user-->', message.user);
  return (
    <div className='message'>
      <p className='sentTextUser'>
        {message.user === 'admin' ? null : `${name}: `}
      </p>
      <div className='textBox'>
        <p className='text'>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
