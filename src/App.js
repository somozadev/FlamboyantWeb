import React from 'react';
import '@mui/material'
import './App.css';
import { CssBaseline } from '@mui/material';

import Header from './components/Header';
import Navbar from './components/Navbar';
import MainInfo from './components/MainInfo';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Staff from './components/Staff';
import About from './components/About';
import ImageSliderGroup from './components/ImageSliderGroup';
import FlamboxPrizes from './components/FlamboxPrizes';

function App() {
  return (
    <div className='root'>
      <CssBaseline />
      <Navbar/> 
      <Header />
      <About />
      <ImageSliderGroup/>
      {/* <MainInfo /> */}
      <Faq />
      <FlamboxPrizes />
      <Staff />
      <Footer />
    </div>
  );
}

export default App;
