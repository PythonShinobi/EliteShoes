// client/src/App.js
import React, { memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./home/Home"
import ContactPage from './contact/Contact';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

// Memoized components
const MemoizedComponents = {
  Home: memo(Home),
  ContactPage: memo(ContactPage),
};

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Routes>
            <Route path='/' element={<MemoizedComponents.Home />} />            
            <Route path='/contact' element={<MemoizedComponents.ContactPage />} />
          </Routes>          
        </div>
        <Footer />
    </BrowserRouter>
  );
};

export default memo(App);