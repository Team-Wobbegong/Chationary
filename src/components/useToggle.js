import { useState } from 'react';

export default function useToggle(iniVal = false) {
  const [state, setState] = useState(iniVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
