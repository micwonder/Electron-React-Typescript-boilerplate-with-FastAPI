import React, { useContext, useState } from 'react';
import eye_slash_icon from '../../../../assets/icons/eye_slash.svg';
import eye_icon from '../../../../assets/icons/eye.png';
import pass_weak from '../../../../assets/icons/pass_weak.svg';
import pass_normal from '../../../../assets/icons/pass_normal.svg';
import pass_strong from '../../../../assets/icons/pass_strong.svg';
import CreateAccountContext from '../../contexts/CreateAccountContext';

type StrengthListType = {
  [key: string]: {
    icon: React.ReactNode;
    color: string;
  };
};

const CreateAccount = ({ passStatus }: { passStatus: string }) => {
  const strengthList: StrengthListType = {
    weak: { icon: pass_weak, color: 'text-primary' },
    normal: {
      icon: pass_normal,
      color: 'text-passwordMediumColor',
    },
    strong: {
      icon: pass_strong,
      color: 'text-passwordStrongColor',
    },
  };

  const [showPassword, setshowPassword] = useState<boolean>(false);

  const [passStrength, setPassStrength] = useState<string>('weak');

  const { myName, setMyName } = useContext(CreateAccountContext);
  const { myPassword, setMyPassword } = useContext(CreateAccountContext);
  const { myEmail, setMyEmail } = useContext(CreateAccountContext);

  return (
    <>
      
      <div className="relative">
        <label className="text-slate-400 font-normal">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="bg-white/80 rounded-md peer h-12 w-full text-black focus:outline-none focus:borer-rose-600 pl-5 my-2"
          placeholder="Enter your name"
          onChange={(e) => setMyName(e.target.value)}
        />
      </div>
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
          onChange={(e) => {
            setMyPassword(e.target.value);
            let passLength = e.target.value.length;
            if (passLength >= 0 && passLength < 6) {
              setPassStrength('weak');
            } else if (passLength >= 6 && passLength < 10) {
              setPassStrength('normal');
            } else {
              setPassStrength('strong');
            }
          }}
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
      <div className="flex justify-between items-center">
        <div className=" text-distlineColor sm:text-center text-xs leading-[18px]">
          Must be at least 8 characters
        </div>
        <div className="flex text-right sm:text-center text-xs hover:text-gray-500">
          <img
            className="object-contain"
            src={strengthList[passStrength].icon}
            alt="pw_status"
            width={9.6}
            height={12}
          ></img>
          <span
            className={`${strengthList[passStrength].color} text-xs leading-[18px] pl-[5px]`}
          >
            {passStrength}
          </span>
        </div>
      </div>
    </>
  );
};

CreateAccount.displayName = 'CreateAccount';

export default CreateAccount;
