import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from "react-router-dom";
import './Header.css'

const Header = (setCoordinates) => {
  

  return (
    <AppBar position="static">
      <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h5" style={{ marginRight: 'auto' }}>
          Travel with Us
        </Typography>
        <Box display='flex'>
        <Typography variant="h6" style={{ margin: '10px' }}>
        <Link to="/login"><button className='button' >Sign in</button></Link>
          
        </Typography>
        <Typography variant="h6" style={{ margin: '10px' }}>
        <Link to="/register"><button className='button' >Sign up</button></Link>
        </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;