import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import Carousel from './components/Carousel';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['access-token']);

  useEffect(() => {
    const checkAuth = async () => {
      requestOptions.body = JSON.stringify({ 'access-token': cookies['access-token'] });
      const checkAuthResponse = await fetch('http://localhost:8000/user/checkAutherization', requestOptions);
      if (!checkAuthResponse.ok) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    }
    checkAuth();
  }, [cookies]);

  return (
    <div className='bg-blue-100 text-gray-900 h-full flex flex-col gap-2'>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className='container mx-auto px-4 py-8'>
        <PromoSection />
        <Carousel />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default App;
