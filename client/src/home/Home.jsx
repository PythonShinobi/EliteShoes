import React from "react";
import { Box, Typography, useMediaQuery, useTheme, Grid, Divider } from '@mui/material';
import heroSectionImage from '../images/hero.jpeg';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* First Section */}
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
            Find Your Footwear Here
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

      {/* Second Section */}
      <Box
        sx={{
          padding: isSmallScreen ? '20px' : '40px',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: isSmallScreen ? '28px' : '37px', 
            fontWeight: 700,
            lineHeight: '37px',
            color: '#2d2d2d',
            margin: isSmallScreen ? '0px 20px 30px' : '0px 66px 60px', // Adjust for smaller screens
            textAlign: 'center',
          }}
        >
          Why Shop With Us?
        </Typography>

        {/* Divider Line */}
        <Divider
          sx={{
            width: isSmallScreen ? '60%' : '200px', // Adjust width for small screens
            margin: '10px auto 40px', // Center and add margin
            borderBottomWidth: '2px',
            backgroundColor: '#b0b0b0', // Light gray for increased visibility
          }}
        />

        {/* Grid for the three offers */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={styles.offerBox}>
              <Typography variant="h6" sx={styles.offerTitle}>
                Free Shipping
              </Typography>
              <Typography sx={styles.offerDescription}>
                Get free shipping on orders over a 2000 ksh.
                Save on delivery fees and enjoy fast, reliable shipping straight to your doorstep.
                This offer is valid for all major cities and towns, ensuring you get your favorite shoes delivered hassle-free.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={styles.offerBox}>
              <Typography variant="h6" sx={styles.offerTitle}>
                First Purchase Discount
              </Typography>
              <Typography sx={styles.offerDescription}>
                New to our store? Enjoy a special discount of 10-20% off on your first purchase! 
                This exclusive offer is designed to give you a head start on building your shoe collection.
                The more you shop, the more you save
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={styles.offerBox}>
              <Typography variant="h6" sx={styles.offerTitle}>
                Limited Edition Releases
              </Typography>
              <Typography sx={styles.offerDescription}>                
                These limited-time-only releases are crafted with premium materials and are often released in small quantities.
                Stay ahead of the trends with unique footwear that speaks to your personal style.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

// Styles for the offer boxes
const styles = {
  offerBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center', // Center the text and titles
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#333',
  },
  offerDescription: {
    fontSize: '1rem',
    color: '#555',
    textAlign: 'center', // Center the description text
  },
};

export default Home;