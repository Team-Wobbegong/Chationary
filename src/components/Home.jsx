import React from 'react';
import { Link } from 'react-router-dom';
import { Chatrooms } from './Chatrooms';
import useInputState from './useInputState';

const Home = () => {
  const [name, handleChangeName, resetName] = useInputState('');
  const [room, handleChangeRoom, resetRoom] = useInputState('');

  return (
    <div className='homeOuterContainer'>
      <div className='homeInnerContainer'>
        <h1 className='heading'>Welcome</h1>
        <>
          <input
            placeholder='Name'
            className='homeInput'
            type='text'
            onChange={handleChangeName}
          />
        </>
        <>
          <select
            className='homeInput'
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
          <Link to={`/chat/${name}/${room}`}>
            <button
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              className={'button'}
              type='submit'
            >
              Join
            </button>
          </Link>
        </>
      </div>
    </div>
  );
};

export default Home;
