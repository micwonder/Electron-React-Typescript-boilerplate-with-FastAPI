import { createContext } from 'react';

interface MailContextValue {
  myPassword: string;
  setMyPassword: React.Dispatch<React.SetStateAction<string>>;
  myEmail: string;
  setMyEmail: React.Dispatch<React.SetStateAction<string>>;
}

const MailContext = createContext<MailContextValue>({
  myPassword: '',
  setMyPassword: () => {},
  myEmail: '',
  setMyEmail: () => {},
});

export default MailContext;