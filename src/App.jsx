import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PromoSection from './components/PromoSection';
import Carousel from './components/Carousel';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <PromoSection />
        <Carousel />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default App;
