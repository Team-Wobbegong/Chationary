import React, { useState } from 'react';

export default (inival) => {
  const [value, setValue] = useState(inival);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => {
    setValue('');
  };
  return [value, handleChange, reset];
};

//usage:
// const [message, handleChangeMessage, resetMessage] = useInputState('');
