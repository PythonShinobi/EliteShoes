// client/src/components/ProductGrid.jsx
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

import ProductCard from './ProductCard';

const ProductGrid = ({ products, title }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 3,
          textAlign: 'center',
          fontSize: {
            xs: '1.5rem', // Small screen
            sm: '1.75rem', // Medium screen
            md: '2rem', // Large screen
            lg: '2.5rem' // Extra large screen
          },
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product, index) => (
          <Grid item key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
