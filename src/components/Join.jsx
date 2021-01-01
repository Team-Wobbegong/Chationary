import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chatrooms } from './Chatrooms';
import useInputState from './useInputState';
import axios from 'axios';

const Join = ({ match }) => {
  const { name } = match.params;
  const [room, handleChangeRoom] = useInputState('');
  const [usersByRoom, setUsersByRoom] = useState([]);

  const getActiveRooms = async () => {
    try {
      const response = await axios.get('/activerooms', {
        header: { 'Content-Type': 'Application/JSON' },
      });
      console.log('response => ', response);

      const data = response.data;
      console.log('data => ', data);

      setUsersByRoom(data);

      console.log('usersByRoom => ', usersByRoom);
    } catch (error) {
      console.log('Error in getActiveRooms of Join component:', error);
    }
  };

  useEffect(() => {
    console.log('useEffect in join component fired');
    getActiveRooms();
  }, []);

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
        <>
          <div className="usersByRoom">
            <div>
              {usersByRoom.some((room) => room.userCount !== 0)
                ? 'Active Chatrooms'
                : null}
            </div>
            <div>
              {usersByRoom.map((room) =>
                room.userCount ? (
                  <div className="room">
                    <img
                      alt="Online Icon"
                      src={'../assets/images/onlineIcon.png'}
                    />
                    {`${room.roomName}: ${room.userCount} ${
                      room.userCount === 1 ? 'user' : 'users'
                    }`}
                  </div>
                ) : null
              )}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Join;
