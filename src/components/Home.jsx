import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Chatrooms } from './Chatrooms';

const Home = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  
  return (
    <div className="homeOuterContainer">
      <div className="homeInnerContainer">
        <h1 className="heading">Welcome</h1>
        <>
          <input
            placeholder="Name"
            className="homeInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </>
        <>
          <select
            className="homeInput"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          >
            <option>Choose A Chatroom</option>
            {Chatrooms.map((room, idx) => (
              <option key={`room-${idx}`} value={room.roomName}>
                {room.roomName}
              </option>
            ))}
          </select>
        </>
        <>
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat/${name}/${room}`}
          >
            <button className={'button'} type="submit">
              Join
            </button>
          </Link>
        </>
      </div>
    </div>
  );
};

export default Home;
