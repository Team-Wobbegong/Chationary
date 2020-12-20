import React, { useState, useEffect } from 'react';
// import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
const endpoint = 'localhost:8080';

const Chat = ({ match }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    console.log('useEffect is fired!');
    // console.log(match.params);
    const { name, room } = match.params;

    socket = io(endpoint);

    socket.on('connect', () => {
      console.log('Frontend socket.id => ', socket.id);
    });

    socket.emit('join', { name, room }, () => {});

    setName(name);
    setRoom(room);

    console.log('socket => ', socket);
  }, [endpoint, match.params]);

  return <div>Chat</div>;
};
export default Chat;
