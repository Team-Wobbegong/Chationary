import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <form className='Form' method='POST' action='/signin'>
      <label>
        Username:
        <input className='input' type='text' />
      </label>
      <label>
        Password:
        <input className='input' type='password' />
      </label>

      <button className='btn-signin'>Sign in</button>

      <div>
        <span>No account?</span>
        <Link to='/signup'>Sign up</Link>
      </div>
    </form>
  );
}
