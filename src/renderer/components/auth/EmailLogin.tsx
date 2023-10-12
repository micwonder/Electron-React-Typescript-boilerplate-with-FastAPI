'use client';

import React from 'react';
import { useState, useContext } from 'react';

import eye_slash_icon from '../../../../assets/icons/eye_slash.svg';
import eye_icon from '../../../../assets/icons/eye.png';
import MailContext from '../../contexts/MailContext';

const EmailLogin: React.FC = () => {
  const { myPassword, setMyPassword } = useContext(MailContext);
  const { myEmail, setMyEmail } = useContext(MailContext);

  const [showPassword, setshowPassword] = useState(false);

  return (
    <>
      <div className="relative">
        <label className="text-slate-400 font-normal">
          E-mail or phone number
        </label>
        <input
          id="email"
          name="email"
          type="text"
          className="bg-white/80 rounded-md peer h-12 w-full text-black focus:outline-none focus:borer-rose-600 pl-5 my-2"
          placeholder="Type your e-mail or phone number"
          onChange={(e) => setMyEmail(e.target.value)}
        />
      </div>
      <div className="relative">
        <label className="text-slate-400">Password</label>
        <input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          className="h-12 bg-white/80 rounded-md peer w-full text-black focus:outline-none focus:borer-rose-600 pl-5 mt-2"
          placeholder="************"
          onChange={(e) => setMyPassword(e.target.value)}
        />
        <div className="absolute inset-y-0 end-0 grid place-content-center px-5 mt-8">
          <button onClick={() => setshowPassword(!showPassword)}>
            <img
              alt="eye_icon"
              src={showPassword ? eye_slash_icon : eye_icon}
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1">
        <p className="text-slate-500 sm:text-center text-xs">
          Must be at least 8 characters
        </p>
        <div className="text-right text-xs sm:text-center text-forgotColor hover:underline hover:text-slate-500">
          <a href="/forgotpassword">Forgot your password?</a>
        </div>
      </div>
    </>
  );
};

EmailLogin.displayName = 'EmailLogin';

export default EmailLogin;
