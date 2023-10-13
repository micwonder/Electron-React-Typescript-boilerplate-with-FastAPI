import React from 'react';
import { useState } from 'react';

import EmailLogin from '../components/auth/EmailLogin';
import MailContext from '../contexts/MailContext';
// @ts-ignore
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import AuthConvert from '../components/auth/AuthConvert';

const Signin: React.FC = () => {
  const [myPassword, setMyPassword] = useState<string>('');
  const [myEmail, setMyEmail] = useState<string>('');

  const contextValue = {
    myPassword,
    setMyPassword,
    myEmail,
    setMyEmail,
  };

  const sendLoginRequest = () => {
    fetch('http://127.0.0.1:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: myEmail, password: myPassword }),
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
        // console.error(error); // Handle any other unexpected errors
      });
  };

  return (
    <MailContext.Provider value={contextValue}>
      <div className="mt-8 font-yamamoto py-4 px-4 text-base leading-6 space-y-4 text-gray-700">
        <EmailLogin />
      </div>
      <div className="mt-8 w-full max-w-[300px]">
        <button
          onClick={sendLoginRequest}
          className="primary-btn bg-indigo-700 w-full"
          type="button"
        >
          Login as a member
        </button>
      </div>
      <div className="text-sm">
        <AuthConvert
          experssion="Don’t have an account "
          action="Create account"
          href="/signup"
        />
      </div>
    </MailContext.Provider>
  );
};

export default Signin;
