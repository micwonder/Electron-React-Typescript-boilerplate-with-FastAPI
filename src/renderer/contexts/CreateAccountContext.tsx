import { createContext } from 'react';

interface CreateAccountContextValue {
  myName: string;
  setMyName: React.Dispatch<React.SetStateAction<string>>;
  myPassword: string;
  setMyPassword: React.Dispatch<React.SetStateAction<string>>;
  myEmail: string;
  setMyEmail: React.Dispatch<React.SetStateAction<string>>;
}

const CreateAccountContext = createContext<CreateAccountContextValue>({
  myName: '',
  setMyName: () => {},
  myPassword: '',
  setMyPassword: () => {},
  myEmail: '',
  setMyEmail: () => {},
});

export default CreateAccountContext;
