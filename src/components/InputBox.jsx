import React, { useState, useRef } from 'react';
import useToggle from './useToggle';
import { Smile } from 'react-feather';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const InputBox = ({ sendNewMessage, sendTypingMsg }) => {
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, toggleShowEmojiPicker] = useToggle(false);
  const inputEl = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    } else {
      sendTypingMsg();
    }
  };

  const handleSendMessage = (e) => {
    // console.log('handleSendMessage!');
    e.preventDefault();
    sendNewMessage(newMessage);
    setNewMessage('');
    inputEl.current.focus();
  };

  const addEmoji = (emoji) => {
    // console.log('emoji => ', emoji);
    setNewMessage(`${newMessage} ${emoji.native} `);
    toggleShowEmojiPicker();
    inputEl.current.focus();
  };

  return (
    <div className="inputBoxOuterContainer">
      <div className="emojiPicker">
        {showEmojiPicker && <Picker set="apple" onSelect={addEmoji} />}
      </div>
      <div className="form">
        <button
          className="toggle-emoji"
          type="button"
          onClick={toggleShowEmojiPicker}
        >
          <Smile />
        </button>
        <input
          className="inputBox"
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          onClick={showEmojiPicker ? toggleShowEmojiPicker : null}
          autoFocus
          ref={inputEl}
        />
        <button className="sendButton" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default InputBox;
