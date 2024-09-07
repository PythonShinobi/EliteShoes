import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

import heroSectionImage from '../images/hero.jpeg';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: isSmallScreen ? '50vh' : isMediumScreen ? '60vh' : '100vh',
        backgroundImage: `url(${heroSectionImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Overlay to enhance text visibility */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent dark overlay
          zIndex: 1,
        }}
      />
      
      <Box
        sx={{
          position: 'relative',
          width: '90%',
          padding: '0',
          zIndex: 2, // Ensure text is above the overlay
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: isSmallScreen ? '2rem' : isMediumScreen ? '3rem' : '4rem',
            fontWeight: 900,
            letterSpacing: '1px',
            lineHeight: '1.4',
            margin: '0',
            padding: '0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Darker shadow for better contrast
            color: '#fff', // White color for high contrast
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          }}
        >
          Find Your Footware Here
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: isSmallScreen ? '1rem' : isMediumScreen ? '1.25rem' : '1.5rem',
            margin: '10px 0',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Darker shadow for better contrast
            color: '#fff', // White color for high contrast
            overflowWrap: 'break-word',
            wordWrap: 'break-word',
          }}
        >
          Explore our collection and find what you love.
        </Typography>
      </Box>

      {/* Down Arrow GIF positioned at the bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px', // Position the arrow at the bottom of the image
          zIndex: 2,
        }}
      >
        <img
          src="https://s0.as-img.com/assets/general/down-arrow-a0ef5451f0b3c719a9f8e60be533c422.gif"
          alt="Scroll down"
          style={{
            width: isSmallScreen ? '30px' : '40px',
            height: isSmallScreen ? '80px' : '90px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
