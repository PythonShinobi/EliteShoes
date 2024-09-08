// client/src/components/ProductCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ width: 250, height: 300, m: 2 }}> {/* Fixed width and height */}
      <CardMedia
        component="img"
        height="220"
        image={product.image} 
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ksh {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
