import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar, Toolbar, IconButton, Typography, Drawer, 
  List, ListItem, ListItemText, Box
} from '@mui/material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'transparent', // Fully transparent navbar
          boxShadow: 'none',
          borderBottom: '2px solid rgba(255, 255, 255, 0.3)', // A subtle horizontal line
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
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Typography variant="h6" component="a" href="/products" sx={styles.link}>
                Products
              </Typography>
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
          <ListItem button component="a" href="/products" onClick={toggleDrawer(false)}>
            <ListItemText primary="Products" />
          </ListItem>
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
};

export default Navbar;