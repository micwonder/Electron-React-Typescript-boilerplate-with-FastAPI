import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { url } from 'inspector';
import backgroundImg from '../../assets/download/ai-vector2.jpg';
import xmark from '../../assets/xmark.png';
import Signup from './app/signup';

import { NotificationContainer } from 'react-notifications';
import Signin from './app/signin';

export default function App() {
  return (
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
        <Router>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
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
      <NotificationContainer />
    </div>
  );
}
