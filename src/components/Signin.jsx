import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useInputState from './useInputState';

const Signin = ({ history }) => {
  const [username, handleUsername] = useInputState('');
  const [password, handlePassword] = useInputState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { username, password };
    console.log('body==>', body);

    try {
      const response = await fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      console.log('response => ', response);
      console.log('response.status => ', response.status);

      if (response.status === 200) {
        console.log('Signed In!');
        //redirect to Home
        history.push('/home');
      } else {
        alert('Invalid Email Or Password. Please Try Again Or Go To Sign Up.');
      }
    } catch (error) {
      console.log('Error in handleSubmit of SignIn component:', error);
    }
  };
  return (
    <div className="signin">
      <h1>Sign In</h1>

      <div className="redirect-to-signup">
        <p>New to Chationary?</p>
        <Link to="/signup" className="link-signup">
          Sign Up
        </Link>
      </div>

      <form className="form-signin" onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input type="text" value={username} onChange={handleUsername} />
        </label>

        <label>
          <span>Password</span>
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <button className="btn btn-signin">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
