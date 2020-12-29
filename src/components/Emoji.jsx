import React, { useState } from 'react';
import { Smile } from 'react-feather';
import useToggle from './useToggle';

const Emoji = () => {
   const [showEmojiPicker, setShowEmojiPicke] = useToggle(false);
  return (
    <button type="button" className="toggle-emoji">
      <Smile />
    </button>
  );
};

export default Emoji;
