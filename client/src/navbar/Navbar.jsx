import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import {
  AppBar, Toolbar, IconButton, Typography, Drawer, 
  List, ListItem, ListItemText, Box, Menu, MenuItem
} from '@mui/material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productsMenuAnchor, setProductsMenuAnchor] = useState(null);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMouseEnter = (event) => {
    setProductsMenuAnchor(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setProductsMenuAnchor(null);
    setDrawerOpen(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          backdropFilter: 'blur(10px)', // Blur effect
          boxShadow: 'none',          
        }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#e0e6ed', fontWeight: 600 }}>
            EliteShoes
          </Typography>

          {/* Hamburger Menu for Small Screens */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: '#e0e6ed' }} />
          </IconButton>

          {/* Nav items for medium and larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Typography variant="h6" component="a" href="/" sx={styles.link}>
                Home
              </Typography>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              transition={{ type: 'spring', stiffness: 300 }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{ position: 'relative' }}
            >
              <Typography variant="h6" component="a" href="/products" sx={styles.link}>
                Products
              </Typography>
              {productsMenuAnchor && (
                <Box 
                sx={{ 
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  color: '#e0e6ed',
                  zIndex: 10,
                  borderRadius: 1,
                  display: { xs: 'none', md: 'block' },
                  width: '150px', // Increase width here
                  padding: '8px 0', // Optional: add vertical padding
                  boxSizing: 'border-box', // Include padding in width
                }}
                >
                  <NavLink to="/products/sneakers" style={styles.dropdownItem}>Sneakers</NavLink>
                  <NavLink to="/products/boots" style={styles.dropdownItem}>Boots</NavLink>
                  <NavLink to="/products/high-heels" style={styles.dropdownItem}>High Heels</NavLink>
                  <NavLink to="/products/sport-shoes" style={styles.dropdownItem}>Sport Shoes</NavLink>
                </Box>
              )}
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Typography variant="h6" component="a" href="/contact" sx={styles.link}>
                Contact
              </Typography>
            </motion.div>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List sx={{ width: 250, backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '100%', color: '#e0e6ed' }}>
          <ListItem button component="a" href="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleMouseEnter}>
            <ListItemText primary="Products" />
          </ListItem>
          {productsMenuAnchor && (
            <Menu
              anchorEl={productsMenuAnchor}
              open={Boolean(productsMenuAnchor)}
              onClose={handleMouseLeave}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem component={NavLink} to="/products/sneakers" onClick={handleMouseLeave}>Sneakers</MenuItem>
              <MenuItem component={NavLink} to="/products/boots" onClick={handleMouseLeave}>Boots</MenuItem>
              <MenuItem component={NavLink} to="/products/high-heels" onClick={handleMouseLeave}>High Heels</MenuItem>
              <MenuItem component={NavLink} to="/products/sport-shoes" onClick={handleMouseLeave}>Sport Shoes</MenuItem>            
            </Menu>
          )}
          <ListItem button component="a" href="/contact" onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

const styles = {
  link: {
    textDecoration: 'none',
    color: '#ffffff', // White text for visibility
    margin: '0 15px',
    fontSize: '18px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: '#64b5f6', // Refined blue shade on hover
    },
  },
  dropdownItem: {
    textDecoration: 'none',
    fontSize: '15px',
    color: '#ffffff', // White text for visibility
    padding: '8px 16px',
    display: 'block',
    width: '100%', // Full width
    boxSizing: 'border-box', // Ensure padding is included in the total width
    '&:hover': {
      backgroundColor: '#333', // Darker background on hover
    },
  },
};

export default Navbar;