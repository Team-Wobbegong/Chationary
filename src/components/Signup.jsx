import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useInputState from './useInputState';
import useToggle from './useToggle';

const Signup = ({ history }) => {
  const [username, handleUsername] = useInputState('');
  const [password, handlePassword] = useInputState('');
  const [state, toggle] = useToggle(false);

  const handleClick = (e) => {
    e.preventDefault();

    console.log('username===>', username);

    axios
      .post('/auth/verify', { username })
      .then((res) => {
        console.log('response--->', res.data); // true or false
        if (res.data) {
          //..
        } else {
          //...
        }
      })
      .catch((err) => {
        console.log('err===>', err);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { username, password };
    console.log('body==>', body);

    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      console.log(response);

      if (response.status === 200) {
        console.log('Signed Up!');
        //redirect to Home
        history.push(`/join/${username}`);
      } else {
        alert('Sign Up Not Completed. Please Try Again.');
      }
    } catch (error) {
      console.log('Error in handleSubmit of SignUp component:', error);
    }
  };
  return (
    <div className='signup'>
      <h1>Sign Up</h1>

      <div className='redirect-to-signin'>
        <p>Already have an account?</p>
        <Link to='/' className='link-signin'>
          Sign In
        </Link>
      </div>

      <form className='form-signup' onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input type='text' value={username} onChange={handleUsername} />
          <button onClick={handleClick}>verify</button>
        </label>

        <label>
          <span>Password</span>
          <input type='password' value={password} onChange={handlePassword} />
        </label>
        <button className='btn btn-signup'>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
