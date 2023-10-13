'use client';

import { Link } from 'react-router-dom';

const AuthConvert = ({
  experssion,
  action,
  href,
}: {
  experssion: string;
  action: string;
  href: string;
}) => {
  return (
    <>
      <div className="flex items-center sm:block justify-center gap-[8px]">
        <p className="text-center text-distlineColor">{experssion}</p>
        <Link to={href}>
          <p className="sm:w-full sm:block text-center text-forgotColor hover:underline hover:text-gray-500">
            {action}
          </p>
        </Link>
      </div>
    </>
  );
};

AuthConvert.displayName = 'AuthConvert';

export default AuthConvert;
