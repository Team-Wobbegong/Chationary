import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chatrooms } from './Chatrooms';
import useInputState from './useInputState';
import Axios from 'axios';

const Join = ({match}) => {
  const { name } = match.params;
  const [room, handleChangeRoom] = useInputState('');
  const [activeRoom, setActiveRoom] = useState([]);
  const [userCount, setUserCount] = useState([]);

  const getActiveRooms = async () => {
    try {
      const response = await Axios.get('/activerooms', {
        header: { 'Content-Type': 'Application/JSON' },
      })
      console.log(response)
      const data = response.data
      console.log(data);
      console.log(Object.entries(data))
      for (const [roomName, count] of Object.entries(data)) {
        console.log(roomName)
        console.log(count)
        setActiveRoom(activeRoom => [...activeRoom, roomName]);
        setUserCount(userCount => [...userCount, count]);
      }
      console.log(activeRoom)
      console.log(userCount)
    } catch (err) {
      console.log(`Error: in get request /activerooms, ${err}`)
    }
  }

  useEffect(() => {
    console.log('useEffect in join component fired')
    getActiveRooms();
  }, [])

  return (
    <div className="homeOuterContainer">
      <div className="homeInnerContainer">
        <h1 className="heading">Welcome</h1>
        <div style={{color: 'white'}}>Active Chatrooms:</div>
        <div style={{color: 'white'}}>
          {activeRoom.map((room) => (
            <p>
              {room}
            </p>
          ))}
          {userCount.map((count) => (
            <p>
              {count}
            </p>
          ))}
        </div>
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
