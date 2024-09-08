// client/src/data/SportShoesPage.jsx
import React, { useEffect } from "react";
import ProductGrid from "../components/ProductGrid";

import sport1 from '../images/sport_shoes/sport1.jpeg';
import sport2 from '../images/sport_shoes/sport2.jpeg';
import sport3 from '../images/sport_shoes/sport3.jpeg';
import sport4 from '../images/sport_shoes/sport4.jpeg';
import sport5 from '../images/sport_shoes/sport5.jpeg';
import sport6 from '../images/sport_shoes/sport6.jpeg';
import sport7 from '../images/sport_shoes/sport7.jpeg';
import sport8 from '../images/sport_shoes/sport8.jpeg';
import sport9 from '../images/sport_shoes/sport9.jpeg';
import sport10 from '../images/sport_shoes/sport10.jpeg';
import sport11 from '../images/sport_shoes/sport11.jpeg';
import sport12 from '../images/sport_shoes/sport12.jpeg';
import sport13 from '../images/sport_shoes/sport13.jpeg';
import sport14 from '../images/sport_shoes/sport14.jpeg';
import sport15 from '../images/sport_shoes/sport15.jpeg';
import sport16 from '../images/sport_shoes/sport16.jpeg';
import sport17 from '../images/sport_shoes/sport17.jpeg';
import sport18 from '../images/sport_shoes/sport18.jpeg';
import sport19 from '../images/sport_shoes/sport19.jpeg';
import sport20 from '../images/sport_shoes/sport20.jpeg';
import sport21 from '../images/sport_shoes/sport21.jpeg';
import sport22 from '../images/sport_shoes/sport22.jpeg';
import sport23 from '../images/sport_shoes/sport23.jpeg';
import sport24 from '../images/sport_shoes/sport24.jpeg';
import sport25 from '../images/sport_shoes/sport25.jpeg';
import sport26 from '../images/sport_shoes/sport26.jpeg';

const sportShoes = [
  { id: 1, name: "Sport Shoe 1", price: 9000, image: sport1 },
  { id: 2, name: "Sport Shoe 2", price: 9500, image: sport2 },
  { id: 3, name: "Sport Shoe 3", price: 1000, image: sport3 },
  { id: 4, name: "Sport Shoe 4", price: 1050, image: sport4 },
  { id: 5, name: "Sport Shoe 5", price: 1100, image: sport5 },
  { id: 6, name: "Sport Shoe 6", price: 1150, image: sport6 },
  { id: 7, name: "Sport Shoe 7", price: 1200, image: sport7 },
  { id: 8, name: "Sport Shoe 8", price: 1250, image: sport8 },
  { id: 9, name: "Sport Shoe 9", price: 1300, image: sport9 },
  { id: 10, name: "Sport Shoe 10", price: 1350, image: sport10 },
  { id: 11, name: "Sport Shoe 11", price: 1400, image: sport11 },
  { id: 12, name: "Sport Shoe 12", price: 1450, image: sport12 },
  { id: 13, name: "Sport Shoe 13", price: 1500, image: sport13 },
  { id: 14, name: "Sport Shoe 14", price: 1550, image: sport14 },
  { id: 15, name: "Sport Shoe 15", price: 1600, image: sport15 },
  { id: 16, name: "Sport Shoe 16", price: 1650, image: sport16 },
  { id: 17, name: "Sport Shoe 17", price: 1700, image: sport17 },
  { id: 18, name: "Sport Shoe 18", price: 1750, image: sport18 },
  { id: 19, name: "Sport Shoe 19", price: 1800, image: sport19 },
  { id: 20, name: "Sport Shoe 20", price: 1850, image: sport20 },
  { id: 21, name: "Sport Shoe 21", price: 1900, image: sport21 },
  { id: 22, name: "Sport Shoe 22", price: 1950, image: sport22 },
  { id: 23, name: "Sport Shoe 23", price: 2000, image: sport23 },
  { id: 24, name: "Sport Shoe 24", price: 2050, image: sport24 },
  { id: 25, name: "Sport Shoe 25", price: 2100, image: sport25 },
  { id: 26, name: "Sport Shoe 26", price: 2150, image: sport26 },
];

const SportShoesPage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: '70px' }}>
      <ProductGrid products={sportShoes} title="Sport Shoes Collection"/>
    </div>
  );
};

export default SportShoesPage;