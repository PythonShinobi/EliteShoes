// client/src/data/BootsPage.jsx
import React, { useEffect } from "react";
import ProductGrid from "../components/ProductGrid";

import boot1 from '../images/boots/boot1.jpeg';
import boot2 from '../images/boots/boot2.jpeg';
import boot3 from '../images/boots/boot3.jpeg';
import boot4 from '../images/boots/boot4.jpeg';
import boot5 from '../images/boots/boot5.jpeg';
import boot6 from '../images/boots/boot6.jpeg';
import boot7 from '../images/boots/boot7.jpeg';
import boot8 from '../images/boots/boot8.jpeg';
import boot9 from '../images/boots/boot9.jpeg';
import boot10 from '../images/boots/boot10.jpeg';
import boot11 from '../images/boots/boot11.jpeg';
import boot12 from '../images/boots/boot12.jpeg';
import boot13 from '../images/boots/boot13.jpeg';
import boot14 from '../images/boots/boot14.jpeg';
import boot15 from '../images/boots/boot15.jpeg';
import boot16 from '../images/boots/boot16.jpeg';
import boot17 from '../images/boots/boot17.jpeg';
import boot18 from '../images/boots/boot18.jpeg';
import boot19 from '../images/boots/boot19.jpeg';
import boot20 from '../images/boots/boot20.jpeg';
import boot21 from '../images/boots/boot21.jpeg';
import boot22 from '../images/boots/boot22.jpeg';
import boot23 from '../images/boots/boot23.jpeg';

const boots = [
  { id: 1, name: "Boot 1", price: 8000, image: boot1 },
  { id: 2, name: "Boot 2", price: 8500, image: boot2 },
  { id: 3, name: "Boot 3", price: 9000, image: boot3 },
  { id: 4, name: "Boot 4", price: 9500, image: boot4 },
  { id: 5, name: "Boot 5", price: 1000, image: boot5 },
  { id: 6, name: "Boot 6", price: 1050, image: boot6 },
  { id: 7, name: "Boot 7", price: 1100, image: boot7 },
  { id: 8, name: "Boot 8", price: 1150, image: boot8 },
  { id: 9, name: "Boot 9", price: 1200, image: boot9 },
  { id: 10, name: "Boot 10", price: 1250, image: boot10 },
  { id: 11, name: "Boot 11", price: 1300, image: boot11 },
  { id: 12, name: "Boot 12", price: 1350, image: boot12 },
  { id: 13, name: "Boot 13", price: 1400, image: boot13 },
  { id: 14, name: "Boot 14", price: 1450, image: boot14 },
  { id: 15, name: "Boot 15", price: 1500, image: boot15 },
  { id: 16, name: "Boot 16", price: 1550, image: boot16 },
  { id: 17, name: "Boot 17", price: 1600, image: boot17 },
  { id: 18, name: "Boot 18", price: 1650, image: boot18 },
  { id: 19, name: "Boot 19", price: 1700, image: boot19 },
  { id: 20, name: "Boot 20", price: 1750, image: boot20 },
  { id: 21, name: "Boot 21", price: 1800, image: boot21 },
  { id: 22, name: "Boot 22", price: 1850, image: boot22 },
  { id: 23, name: "Boot 23", price: 1900, image: boot23 },
];

const BootsPage = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: '70px' }}>
      <ProductGrid products={boots} title="Women Boots Collection"/>
    </div>
  );
};

export default BootsPage;