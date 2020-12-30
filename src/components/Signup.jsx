import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useInputState from './useInputState';

const Signup = ({ history }) => {
  const [username, handleUsername] = useInputState('');
  const [password, handlePassword] = useInputState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = { username, password };
    console.log('body==>', body);

    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      console.log(response);

      if (response.status === 200) {
        ('Signed Up!');
        //redirect to Home
        history.push('/home');
      } else {
        alert('Sign Up Not Completed. Please Try Again.');
      }
    } catch (error) {
      console.log('Error in handleSubmit of SignUp component:', error);
    }
  };
  return (
    <div className="signup">
      <h1>Sign Up</h1>

      <div className="redirect-to-signin">
        <p>Already have an account?</p>
        <Link to="/" className="link-signup">
          Sign Up
        </Link>
      </div>

      <form className="form-signup" onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input type="text" value={username} onChange={handleUsername} />
        </label>

        <label>
          <span>Password</span>
          <input type="password" value={password} onChange={handlePassword} />
        </label>
        <button className="btn btn-signup">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
