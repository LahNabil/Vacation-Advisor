import React from 'react';
import  GoogleMapReact  from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material';
// import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
/* import LocationOnOutLinedIcon from '@mui/icons-material/LocationOnOutLinedIcon'*/
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import './style.css'

  // const center = {lat:48.8584, lng: 2.2945}

const Mapp = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {

  const isDesktop = useMediaQuery('(min-width:600px)');
  console.log({isDesktop})
  
    
  
  return (
    <div>
        <div className='mapg'>
        <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng})
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
         onChildClick={(child) => setChildClicked(child)}
        >
          {places?.map((place, i) =>(
            <div
              className='markerContainer'
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {
                 !isDesktop 
                ? ( <LocationOnIcon color="primary" fontSize='large'/>
                ):(
                  <Paper elevation={3} className='paper'>
                  <Typography  variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className='pointer'
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    alt={place.name}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                  </Paper>
                
                )}
              

            </div>
          ))}
        </GoogleMapReact>
      
        </div>
        
    </div>
  )
}

export default Mapp