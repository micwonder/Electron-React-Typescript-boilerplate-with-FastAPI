import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import './App.css';

import { url } from 'inspector';
import backgroundImg from '../../assets/download/ai-vector2.jpg';
import xmark from '../../assets/xmark.png';
import EmailLogin from './components/auth/EmailLogin';
import MailContext from './contexts/MailContext'

const Hello: React.FC = () => {
  const [myPassword, setMyPassword] = useState<string>('');
  const [myEmail, setMyEmail] = useState<string>('');

  const contextValue = {
    myPassword,
    setMyPassword,
    myEmail,
    setMyEmail,
  };

  const sendLoginRequest = () => {
    fetch('http://127.0.0.1:8000/user/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: myEmail, password: myPassword }),
    })
      .then((response) => response.json())
      .then((res) => {
        // Handle the response data
        console.log(res);
        // setFrontProfileMark(mark);
        // setShowingScore([data.mark, data.percent]);
      });
  };

  return (
    <MailContext.Provider value={contextValue}>
      <div
        className="_container grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 bg-no-repeat h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <div
          className="content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            <img className="image-container" src={xmark} alt="xmark" />
            <div
              className="text-4xl font-bold sm:text-3xl"
              style={{ textAlign: 'center', marginLeft: '20px' }}
            >
              Project X Labs
            </div>
          </div>
          <div className="mt-8 font-yamamoto py-4 px-4 text-base leading-6 space-y-4 text-gray-700">
            <EmailLogin />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 mt-8">
            <a target="_blank" rel="noreferrer">
              <button
                onClick={sendLoginRequest}
                className="primary-btn bg-indigo-700"
                type="button"
              >
                Login as a member
              </button>
            </a>
            <a target="_blank" rel="noreferrer">
              <button className="primary-btn bg-cyan-600" type="button">
                Create an account
              </button>
            </a>
          </div>
        </div>
        <div className="right-deco sm:hidden md:hidden">
          <div></div>
          <div
            style={{
              maxHeight: '80%',
            }}
          >
            {/* <img width={'100%'} src={decoImg} alt="LeftDecoratorImage" /> */}
          </div>
        </div>
      </div>
    </MailContext.Provider>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
