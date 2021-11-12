import React from 'react';
import './style.css';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import history from './history';

export default function Login() {
  const login = () => {
    history.push('/home');
  };
  return (
    <div className="login">
      <h1>Welcome Back!</h1>
      <p>Login to continue</p>
      <div className="inpts">
        <div className="icons">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            InputProps={{
              className: 'inpt',
            }}
          />
          <PersonIcon className="icon" />
        </div>
        <div className="icons">
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            InputProps={{
              className: 'inpt',
            }}
          />
          <VpnKeyIcon className="icon2" />
        </div>
      </div>

      <a href="">Forgot Password?</a>
      <Button variant="contained" className="btn" onClick={login}>
        Login
      </Button>
      <Button variant="contained" className="btn2">
        Sign Up
      </Button>
    </div>
  );
}
