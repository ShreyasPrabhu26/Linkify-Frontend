import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import LogIn from './pages/LogIn.jsx';
import SignIn from './pages/SignIn.jsx';
import Dashboard from './pages/dashboard.jsx';
import Header from './components/Header';
import './index.css';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const checkAuthResponse = await fetch('http://localhost:8000/api/v1/user/checkAuthorization');
      if (!checkAuthResponse.ok) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, [cookies]);

  return (
    <div className='bg-blue-100 text-gray-900'>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className='container mx-auto px-4 py-8'>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/dashboard' element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='*' element={<div>Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </StrictMode>
);
