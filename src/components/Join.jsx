import React from 'react';
import { Link } from 'react-router-dom';
import { Chatrooms } from './Chatrooms';
import useInputState from './useInputState';

const Join = ({match}) => {
  const { name } = match.params;

  const [room, handleChangeRoom] = useInputState('');

  return (
    <div className="homeOuterContainer">
      <div className="homeInnerContainer">
        <h1 className="heading">Welcome</h1>
        <>
          <select
            className="homeInput"
            value={room}
            onChange={handleChangeRoom}
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
            onClick={(e) =>
              !name || !room || room === 'Choose A Chatroom'
                ? e.preventDefault()
                : null
            }
            to={`/chat/${name}/${room}`}
          >
            <button className={'homeButton'} type="submit">
              Join
            </button>
          </Link>
        </>
      </div>
    </div>
  );
};

export default Join;
