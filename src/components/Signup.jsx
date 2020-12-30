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
      <div>
        <button className='btn-signup'>sign up</button>
      </div>
      <div>
        <span>Already have an account?</span>
        <Link to='/'>Sign in</Link>
      </div>
    </form>
  );
}
