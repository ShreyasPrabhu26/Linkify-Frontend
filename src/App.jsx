import React from 'react'
import Header from './components/Header'
import PromoSection from './components/PromoSection'
import Carousel from './components/Carousel'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-blue-100 text-gray-900 h-full flex flex-col gap-2'>
      <Header />
      <div className='container mx-auto px-4 py-8'>
        <PromoSection />
        <Carousel />
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}

export default App