// client/src/home/Home.jsx
import React, { useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme, Grid, Divider } from '@mui/material';

import heroSectionImage from '../images/hero.jpeg';
import SportShoesImage from '../images/sport-shoes.jpg';
import SneakersImage from '../images/sneakers.jpg';
import BootsImage from '../images/boots.jpg';
import HighHeelsImage from '../images/high-heels.jpg';

const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

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

      {/* What We Offer Section */}
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
            margin: isSmallScreen ? '0px 20px 30px' : '0px 66px 60px',
            textAlign: 'center',
          }}
        >
          What We Offer
        </Typography>

        {/* Divider Line */}
        <Divider
          sx={{
            width: isSmallScreen ? '60%' : '200px',
            margin: '10px auto 40px',
            borderBottomWidth: '2px',
            backgroundColor: '#b0b0b0',
          }}
        />

        {/* Grid for the types of shoes */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box sx={styles.offerBox}>
              <img src={SneakersImage} alt="Sneakers" style={styles.offerImage} />
              <Typography sx={styles.offerText}>
                Sneakers
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Box sx={styles.offerBox}>
              <img src={SportShoesImage} alt="Sport Shoes" style={styles.offerImage} />
              <Typography sx={styles.offerText}>
                Sport Shoes
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Box sx={styles.offerBox}>
              <img src={HighHeelsImage} alt="High Heels" style={styles.offerImage} />
              <Typography sx={styles.offerText}>
                High Heels
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Box sx={styles.offerBox}>
              <img src={BootsImage} alt="Boots" style={styles.offerImage} />
              <Typography sx={styles.offerText}>
                Boots
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      
      {/* Where We Are Located Section */}
      <Box
        sx={{
          backgroundColor: '#f0f0f0',
          padding: isSmallScreen ? '20px' : '40px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: isSmallScreen ? '28px' : '37px', 
            fontWeight: 700,
            lineHeight: '1.4',
            color: '#2d2d2d',
            marginBottom: '20px',
          }}
        >
          Where We Are Located
        </Typography>

        <Divider
          sx={{
            width: isSmallScreen ? '60%' : '200px',
            margin: '10px auto 40px',
            borderBottomWidth: '2px',
            backgroundColor: '#b0b0b0',
          }}
        />

        <Typography
          sx={{
            fontSize: isSmallScreen ? '18px' : '24px', 
            fontWeight: 400,
            lineHeight: '1.5',
            color: '#4d4d4d',
            maxWidth: '800px',
            margin: '0 auto',
            padding: isSmallScreen ? '0 20px' : '0 40px',
          }}
        >
          We are located at City Plaza, Nairobi, Kenya. 
          You can visit us to check out our latest collection in-store and enjoy exclusive discounts.
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  offerBox: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  },
  offerTitle: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  offerDescription: {
    color: '#333333',
  },
  offerImage: {
    width: '100%', // Adjust width as needed
    height: '200px', // Fixed height to ensure consistency
    objectFit: 'cover', // Ensure images cover the area without distortion
    borderRadius: '8px',
    marginBottom: '10px',
  },
  offerText: {
    fontWeight: 'bold',
    marginBottom: '10px',
  }
};

export default Home;