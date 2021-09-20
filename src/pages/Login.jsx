import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';
// import { useSnapshot } from 'valtio';
import { useMutation } from 'react-query';

import NeatLogo from '@app/components/Logo/NeatLogo';
import { Loader } from '@app/components/Loader';

import { auth } from '@app/api/apis';
import { store } from '@app/utils/state-management/proxy';
import { returnObjectKey, REM } from '@app/utils/utils';
import { isLogin } from '@app/utils/auth-utils';
import { setLocalStorage } from '@app/utils/storage-utils';

import '@app/assets/css/Login/custom-style.css';


const Login = ({ loggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [loading, setLoading] = useState(false);

  /**
   * Handler
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const auth_data = {
      'username': username,
      'password': password
    }

    const result = await auth(auth_data);

    const localStorageValue = {
      logged_in: {
        name: returnObjectKey(result.data, 0),
        value: result.data.logged_in
      },
      token: {
        name: returnObjectKey(result.data, 1),
        value: result.data.token
      },
    }

    if (result.status == 200) {
      store.logged_in = true;

      setLocalStorage(localStorageValue);

      window.location.reload();
    } else {
      setInvalidCredentials(true);
      setLoading(false);
    }
  }

  const handleInputChange = (e) => {
    const { target } = e;
    switch (target.name) {
      case 'username':
        setUsername(target.value);
        break;
      case 'password':
        setPassword(target.value);
        break;
      default:
        throw new Error
    }
  }

  const handleInvalidCred = () => {
    setInvalidCredentials(false)
  }

  /**
   * Component Lifecycle
   */

  return isLogin(loggedIn) ? ( 
    <Redirect to='/' /> 
  ) : (
    <div id="login-page" className="h-screen flex items-center justify-center py-20 bg-gray-800 relative">
      {
        loading && <LoginLoader />
      }
      <div id="login-component-wrapper" className="flex flex-col items-center space-y-12 h-full justify-center w-1/3 px-14">
        <div id="logo" className="flex items-center justify-center">
          <NeatLogo height='3.5rem' color='#fff' leafSize={`${2.5*REM}`} />
        </div>
        <div id="login-form" className="p-4 font-body flex flex-col w-k space-y-6 w-full">
          <form onSubmit={handleFormSubmit} className="flex flex-col items-center justify-center space-y-6 w-full">
            <div id="input-wrapper" className="flex flex-col items-start justify-center space-y-6 w-full">
              <input name="username" type="text" required id="username-input" value={username} { ...invalidCredentials && {onClick: handleInvalidCred} } onChange={handleInputChange} placeholder="Username" className={`required-input py-2.5 px-2.5 w-full required:bg-gray-800 border-2 focus:outline-none focus:border-purple-500 ${invalidCredentials ? 'border-red-500' : 'border-gray-700'} placeholder-gray-700 text-white rounded transition-colors duration-500`} />
              <input name="password" type="password" required id="password-input" value={password} {...invalidCredentials && { onClick: handleInvalidCred }} onChange={handleInputChange} placeholder="Password" className={`required-input py-2.5 px-2.5 w-full required:bg-gray-800 border-2 focus:outline-none focus:border-purple-500 ${invalidCredentials ? 'border-red-500' : 'border-gray-700'} placeholder-gray-700 text-white rounded transition-colors duration-500`} />
              <p id="warning-message" className={`${invalidCredentials ? 'visible text-sm text-red-500 font-body' : 'invisible text-sm'} warning-message`}>Invalid Credentials, Please check your username and password.</p>
            </div>
            <input type="submit" id="submit-button" value="SIGN IN" className="cursor-pointer tracking-widest py-3 px-2.5 w-full bg-purple-500 rounded text-white font-body hover:bg-purple-600 transition-colors duration-300" />
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

const LoginLoader = () => {
  return (
    <div id="login-loader" className="h-1/2 w-1/2 absolute z-50 flex items-center justify-center bg-gray-800">
      <Loader type="PuffLoader" size={60} color="#8B5CF6" />
    </div>
  )
}