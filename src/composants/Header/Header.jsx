import React from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@react-google-maps/api';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h5" style={{ marginRight: 'auto' }}>
          Travel with Us
        </Typography>
        <Box display='flex'>
        <Typography variant="h6" style={{ margin: '10px' }}>
          Explore new places
        </Typography>
        </Box>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <SearchIcon style={{height: '100%',display: 'flex', alignItems: 'center'}}/>
          </div>
          <InputBase placeholder="Search..." />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;