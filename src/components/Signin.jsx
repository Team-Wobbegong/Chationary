import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <form className='Form' method='POST' action='/signup'>
      <label>
        Username:
        <input className='input' type='text' />
      </label>
      <label>
        Password:
        <input className='input' type='password' />
      </label>
      <Link to='/home'>
        <button className='btn-signin'>Sign in</button>
      </Link>
      <div>
        <span>No account?</span>
        <Link to='/signup'>Sign up</Link>
      </div>
    </form>
  );
}
