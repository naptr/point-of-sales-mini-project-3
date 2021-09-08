import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';

import NeatLogo from '@app/components/Logo/NeatLogo';

import { auth } from '@app/api/auth';


const Login = ({ loggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const result = await auth(username, password);
    
    
    if (result.status == 200) {
      console.log('success');
    } else {
      setInvalidCredentials(true);
    }

    setLoading(false);
  }

  return loggedIn ? ( 
    <Redirect to='/' /> 
  ) : (
    <div id="login-page" className="h-full w-full flex items-center justify-center py-20 bg-gray-800">
      {
        loading && <h1>Loading</h1>
      }
      <div id="login-component-wrapper" className="flex flex-col items-center space-y-12 h-full justify-center">
        <div id="logo" className="flex items-center justify-center">
          <NeatLogo height='3.5rem' color='#fff' />
        </div>
        <div id="login-form" className="p-4 font-body flex flex-col space-y-6">
          <form onSubmit={handleFormSubmit} className="flex flex-col items-center justify-center space-y-12">
            <div id="input-wrapper" className="flex flex-col items-center justify-center space-y-6">
              <input type="text" id="username-input" value={username} { ...invalidCredentials && {onClick: () => setInvalidCredentials(false)} } onChange={(e) => setUsername(e.target.value)} placeholder="Username" className={`py-2.5 px-2.5 w-80 bg-gray-800 border-2 focus:outline-none focus:border-purple-500 ${invalidCredentials ? 'border-red-500' : 'border-gray-700'} placeholder-gray-700 text-white rounded transition-colors duration-500`} />
              <input type="password" id="password-input" value={password} {...invalidCredentials && { onClick: () => setInvalidCredentials(false) }} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className={`py-2.5 px-2.5 w-80 bg-gray-800 border-2 focus:outline-none focus:border-purple-500 ${invalidCredentials ? 'border-red-500' : 'border-gray-700'} placeholder-gray-700 text-white rounded transition-colors duration-500`} />
            </div>
            <input type="submit" id="submit-button" value="SIGN IN" className="cursor-pointer tracking-widest py-3 px-2.5 w-80 bg-purple-500 rounded text-white font-body hover:bg-purple-600 transition-colors duration-300" />
          </form>
          <div id="forgot-password-wrapper">
            <Link to="#" className="text-gray-700 hover:text-purple-500 transition-colors duration-300">Forgot your password</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;