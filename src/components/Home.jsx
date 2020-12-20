import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="homeOuterContainer">
      <div className="homeInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="homeInput"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="homeInput"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={'button'} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
