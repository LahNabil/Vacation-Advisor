import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase } from '@mui/material';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete } from '@react-google-maps/api';
import './Header.css'

const Header = (setCoordinates) => {
  // const [autocomplete, setAutocomplete] = useState(null);
  // const onLoad = (autoC) => setAutocomplete(autoC); 

//   const onPlaceChanged = () => {
//   if (autocomplete) {
//     const place = autocomplete.getPlace();
//     if (place.geometry && place.geometry.location) {
//       const lat = place.geometry.location.lat();
//       const lng = place.geometry.location.lng();
//       setCoordinates({ lat, lng });
//     }
//   }
// };

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
        {/* <Box display='flex'>
        <Typography variant="h6" style={{ margin: '10px' }}>
          Explore new places
        </Typography>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <div>
            <SearchIcon style={{height: '100%',display: 'flex', alignItems: 'center'}}/>
          </div>
          <InputBase placeholder="Search..." />
        </div>
        </Autocomplete>
        </Box> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;