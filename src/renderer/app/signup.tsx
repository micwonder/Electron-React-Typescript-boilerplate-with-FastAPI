import React from 'react';
import { useState } from 'react';

import CreateAccountContext from '../contexts/CreateAccountContext';
// @ts-ignore
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AuthConvert from '../components/auth/AuthConvert';
import CreateAccount from '../components/auth/CreateAccount';

const Signup: React.FC = () => {
  const [myName, setMyName] = useState<string>('');
  const [myPassword, setMyPassword] = useState<string>('');
  const [myEmail, setMyEmail] = useState<string>('');

  const contextValue = {
    myName,
    setMyName,
    myPassword,
    setMyPassword,
    myEmail,
    setMyEmail,
  };

  const sendLoginRequest = () => {
    fetch('http://127.0.0.1:8000/user/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: myName, email: myEmail, password: myPassword, password_confirmation: myPassword }),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 500) {
            console.error('Something went wrong'); // Handle 500 Internal Server Error
          } else {
            return response.json().then((errorData) => {
              throw new Error(errorData.message); // Handle other errors and parse error message
            });
          }
        }
        return response.json();
      })
      .then((res) => {
        // Handle the response data
        console.log(res);
        NotificationManager.info(res.message);
      })
      .catch((error) => {
        NotificationManager.error(error.message);
        console.error(error); // Handle any other unexpected errors
      });
  };

  return (
    <CreateAccountContext.Provider value={contextValue}>
      <div className="mt-8 font-yamamoto py-4 px-4 text-base leading-6 space-y-4 text-gray-700">
        <CreateAccount passStatus="weak" />
      </div>
      <div className="mt-8 w-full max-w-[300px]">
        <button
          onClick={sendLoginRequest}
          className="primary-btn bg-cyan-600 w-full"
          type="button"
        >
          Create an account
        </button>
      </div>
      <div className="text-sm">
        <AuthConvert
          experssion="Already have an account"
          action="Sign in"
          href="/signin"
        />
      </div>
    </CreateAccountContext.Provider>
  );
};

export default Signup;
