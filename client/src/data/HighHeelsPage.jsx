// client/src/products/HighHeelsPage.jsx
import React, { useEffect } from "react";

import ProductGrid from "../components/ProductGrid";

import heel1 from '../images/heels/heel1.jpeg';
import heel2 from '../images/heels/heel2.jpeg';
import heel3 from '../images/heels/heel3.jpeg';
import heel4 from '../images/heels/heel4.jpeg';
import heel5 from '../images/heels/heel5.jpeg';
import heel6 from '../images/heels/heel6.jpeg';
import heel7 from '../images/heels/heel7.jpeg';
import heel8 from '../images/heels/heel8.jpeg';
import heel9 from '../images/heels/heel9.jpeg';
import heel10 from '../images/heels/heel10.jpeg';
import heel11 from '../images/heels/heel11.jpeg';
import heel12 from '../images/heels/heel12.jpeg';
import heel13 from '../images/heels/heel13.jpeg';
import heel14 from '../images/heels/heel14.jpeg';
import heel15 from '../images/heels/heel15.jpeg';
import heel16 from '../images/heels/heel16.jpeg';
import heel17 from '../images/heels/heel17.jpeg';
import heel18 from '../images/heels/heel18.jpeg';
import heel19 from '../images/heels/heel19.jpeg';
import heel20 from '../images/heels/heel20.jpeg';

const highHeels = [
  { id: 1, name: "Heel 1", price: 1000, image: heel1 },
  { id: 2, name: "Heel 2", price: 1100, image: heel2 },
  { id: 3, name: "Heel 3", price: 1200, image: heel3 },
  { id: 4, name: "Heel 4", price: 1300, image: heel4 },
  { id: 5, name: "Heel 5", price: 1400, image: heel5 },
  { id: 6, name: "Heel 6", price: 1500, image: heel6 },
  { id: 7, name: "Heel 7", price: 1600, image: heel7 },
  { id: 8, name: "Heel 8", price: 1700, image: heel8 },
  { id: 9, name: "Heel 9", price: 1800, image: heel9 },
  { id: 10, name: "Heel 10", price: 1900, image: heel10 },
  { id: 11, name: "Heel 11", price: 2000, image: heel11 },
  { id: 12, name: "Heel 12", price: 2100, image: heel12 },
  { id: 13, name: "Heel 13", price: 2200, image: heel13 },
  { id: 14, name: "Heel 14", price: 2300, image: heel14 },
  { id: 15, name: "Heel 15", price: 2400, image: heel15 },
  { id: 16, name: "Heel 16", price: 2500, image: heel16 },
  { id: 17, name: "Heel 17", price: 2600, image: heel17 },
  { id: 18, name: "Heel 18", price: 2700, image: heel18 },
  { id: 19, name: "Heel 19", price: 2800, image: heel19 },
  { id: 20, name: "Heel 20", price: 2900, image: heel20 },
];

const HighHeelsPage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: '70px' }}>
      <ProductGrid products={highHeels} title="High Heels Collection"/>
    </div>
  );
};

export default HighHeelsPage;