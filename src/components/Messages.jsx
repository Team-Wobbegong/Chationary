import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({ messages, name, typeMsg }) => {
  console.log('type-->', typeMsg);
  //const [typing, setTyping] = useState('');

  // useEffect(() => {
  //   socket.on('typing', (typingData) => {
  //     setTyping(typingData.text);
  //   });
  // });

  return (
    <ScrollToBottom className='messages'>
      {messages.map((message, i) => (
        <div key={`message-${i}`}>
          <Message message={message} name={name} />
        </div>
      ))}
      <p>{typeMsg}</p>
    </ScrollToBottom>
  );
};

export default Messages;
