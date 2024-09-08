// client/src/products/SneakersPage.jsx
import React, { useEffect } from "react";
import ProductGrid from "../components/ProductGrid";

// Import sneaker images
import sneaker1 from '../images/sneakers/sneaker1.jpeg';
import sneaker2 from '../images/sneakers/sneaker2.jpeg';
import sneaker3 from '../images/sneakers/sneaker3.jpeg';
import sneaker4 from '../images/sneakers/sneaker4.jpeg';
import sneaker5 from '../images/sneakers/sneaker5.jpeg';
import sneaker6 from '../images/sneakers/sneaker6.jpeg';
import sneaker7 from '../images/sneakers/sneaker7.jpeg';
import sneaker8 from '../images/sneakers/sneaker8.jpeg';
import sneaker9 from '../images/sneakers/sneaker9.jpeg';
import sneaker10 from '../images/sneakers/sneaker10.jpeg';
import sneaker11 from '../images/sneakers/sneaker11.jpeg';
import sneaker12 from '../images/sneakers/sneaker12.jpeg';
import sneaker13 from '../images/sneakers/sneaker13.jpeg';
import sneaker14 from '../images/sneakers/sneaker14.jpeg';
import sneaker15 from '../images/sneakers/sneaker15.jpeg';
import sneaker16 from '../images/sneakers/sneaker16.jpeg';
import sneaker17 from '../images/sneakers/sneaker17.jpeg';
import sneaker18 from '../images/sneakers/sneaker18.jpeg';
import sneaker19 from '../images/sneakers/sneaker19.jpeg';
import sneaker20 from '../images/sneakers/sneaker20.jpeg';
import sneaker21 from '../images/sneakers/sneaker21.jpeg';
import sneaker22 from '../images/sneakers/sneaker22.jpeg';
import sneaker23 from '../images/sneakers/sneaker23.jpeg';
import sneaker24 from '../images/sneakers/sneaker24.jpeg';
import sneaker25 from '../images/sneakers/sneaker25.jpeg';
import sneaker26 from '../images/sneakers/sneaker26.jpeg';
import sneaker27 from '../images/sneakers/sneaker27.jpeg';
import sneaker28 from '../images/sneakers/sneaker28.jpeg';

// Sneakers data
const sneakers = [
  { name: 'Sneaker 1', price: 1200, image: sneaker1 },
  { name: 'Sneaker 2', price: 1400, image: sneaker2 },
  { name: 'Sneaker 3', price: 1000, image: sneaker3 },
  { name: 'Sneaker 4', price: 1500, image: sneaker4 },
  { name: 'Sneaker 5', price: 1300, image: sneaker5 },
  { name: 'Sneaker 6', price: 1100, image: sneaker6 },
  { name: 'Sneaker 7', price: 1200, image: sneaker7 },
  { name: 'Sneaker 8', price: 1300, image: sneaker8 },
  { name: 'Sneaker 9', price: 1250, image: sneaker9 },
  { name: 'Sneaker 10', price: 1400, image: sneaker10 },
  { name: 'Sneaker 11', price: 1350, image: sneaker11 },
  { name: 'Sneaker 12', price: 1500, image: sneaker12 },
  { name: 'Sneaker 13', price: 1150, image: sneaker13 },
  { name: 'Sneaker 14', price: 1050, image: sneaker14 },
  { name: 'Sneaker 15', price: 1250, image: sneaker15 },
  { name: 'Sneaker 16', price: 1100, image: sneaker16 },
  { name: 'Sneaker 17', price: 1300, image: sneaker17 },
  { name: 'Sneaker 18', price: 1450, image: sneaker18 },
  { name: 'Sneaker 19', price: 1200, image: sneaker19 },
  { name: 'Sneaker 20', price: 1100, image: sneaker20 },
  { name: 'Sneaker 21', price: 1400, image: sneaker21 },
  { name: 'Sneaker 22', price: 1300, image: sneaker22 },
  { name: 'Sneaker 23', price: 1500, image: sneaker23 },
  { name: 'Sneaker 24', price: 1250, image: sneaker24 },
  { name: 'Sneaker 25', price: 1350, image: sneaker25 },
  { name: 'Sneaker 26', price: 1150, image: sneaker26 },
  { name: 'Sneaker 27', price: 1400, image: sneaker27 },
  { name: 'Sneaker 28', price: 1200, image: sneaker28 }
];

const SneakersPage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: '70px' }}>
      <ProductGrid products={sneakers} title="Sneakers Collection" />
    </div>
  );
};

export default SneakersPage;