import React from 'react';
import { Link } from 'react-router-dom';
import { Chatrooms } from './Chatrooms';

export default function NavDropdown() {
  const rooms = Chatrooms.map((room, idx) => {
    return (
      <li className='Chatroom' key={`room${idx}`}>
        <Link to={room.link} style={{ textDecoration: 'none' }}>
          {room.roomName}
        </Link>
      </li>
    );
  });
  return <div className='roomDropdown'>{rooms}</div>;
}
