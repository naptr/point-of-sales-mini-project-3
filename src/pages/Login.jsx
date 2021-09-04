import React from 'react';
import { Redirect } from 'react-router-dom';


const Login = ({ loggedIn }) => {
  return loggedIn ? ( 
    <Redirect to="/" /> 
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <form onSubmit="">
        <input value="Test" />
      </form>
    </div>
  )
}

export default Login;