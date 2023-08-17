import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@react-google-maps/api';

const Header = (setCoordinates) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC); 

  const onPlaceChanged = () => {
  if (autocomplete) {
    const place = autocomplete.getPlace();
    if (place.geometry && place.geometry.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setCoordinates({ lat, lng });
    }
  }
};

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
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <SearchIcon style={{height: '100%',display: 'flex', alignItems: 'center'}}/>
          </div>
          <InputBase placeholder="Search..." />
        </div>
        </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;