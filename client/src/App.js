// client/src/App.js
import React, { memo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./home/Home";
import ContactPage from './contact/Contact';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

import SneakersPage from './data/SneakersPage'; // Import SneakersPage
import HighHeelsPage from './data/HighHeelsPage'
import BootsPage from './data/BootsPage';
import SportShoesPage from './data/SportShoesPage';

// Memoized components
const MemoizedComponents = {
  Home: memo(Home),
  ContactPage: memo(ContactPage),
  SneakersPage: memo(SneakersPage), // Memoize SneakersPage
  HighHeelsPage: memo(HighHeelsPage),
  BootsPage: memo(BootsPage),
  SportShoesPage: memo(SportShoesPage)
};

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Routes>
            <Route path='/' element={<MemoizedComponents.Home />} />
            <Route path='/contact' element={<MemoizedComponents.ContactPage />} />
            <Route path='/products/sneakers' element={<MemoizedComponents.SneakersPage />} /> {/* Add route for products */}
            <Route path='/products/boots' element={<MemoizedComponents.BootsPage />} /> {/* Add route for products */}
            <Route path='/products/high-heels' element={<MemoizedComponents.HighHeelsPage />} /> {/* Add route for products */}
            <Route path='/products/sport-shoes' element={<MemoizedComponents.SportShoesPage />} /> {/* Add route for products */}
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
};

export default memo(App);