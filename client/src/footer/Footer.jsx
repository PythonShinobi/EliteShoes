// client/src/footer/Footer.jsx
import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { X } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#2c3e50', // Dark gray-blue for footer background
        color: '#ecf0f1', // Light gray for text
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.2)', // Slightly more pronounced shadow        
      }}
    >
      <Box sx={{ mb: 2 }}>
        <IconButton
          component={Link}
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener"
          sx={{ color: '#ecf0f1', '&:hover': { color: '#1da1f2' } }} // Twitter blue
        >
          <X />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.tiktok.com/@yourprofile"
          target="_blank"
          rel="noopener"
          sx={{ color: '#ecf0f1', '&:hover': { color: '#010101' } }} // TikTok color
        >
          <FontAwesomeIcon icon={faTiktok} />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener"
          sx={{ color: '#ecf0f1', '&:hover': { color: '#e4405f' } }} // Instagram pink
        >
          <FontAwesomeIcon icon={faInstagram} />
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        sx={{
          fontSize: '12px',
          mb: 1,
          display: 'inline',
        }}
      >
        <Link href="/privacy-policy" color="#ecf0f1" sx={{ textDecoration: 'none' }}>
          Privacy Policy
        </Link>
        {' | '}
        <Link href="/terms-of-service" color="#ecf0f1" sx={{ textDecoration: 'none' }}>
          Terms of Service
        </Link>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '10px',
          fontSize: '14px',
        }}
      >
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
