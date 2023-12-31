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
  
    
    // const {isLoaded} = useJsApiLoader({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // })
    // if (!isLoaded) return <div>Loading ...</div>
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
                  // <Paper elevation={3} className='paper'>
                  //   <Typography className='typography' variant='subtitle2' gutterBottom>
                  //     {place.name}
                  //   </Typography>
                  //   <img src={place.photo ? place.photo.images.large.url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/10/healthy-restaurant-dinner.jpg?quality=82&strip=1'}
                  //         className='pointer'
                  //         alt={place.name}
                  //   />
                  //   <Rating size="small" value={Number(place.rating)} readOnly />

                  // </Paper>
                )}
              

            </div>
          ))}
        </GoogleMapReact>
        {/* <GoogleMap onChange={(e)=>{
          console.log(e)
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
        }} zoom={10} margin={[50,50,50,50]} defaultCenter={center} defaultZoom={14} center={center} mapContainerStyle={{ width: '100%', height: '600px' }}>
            <Marker position={{lat: 44, lng: -80}}/>
        
        
        </GoogleMap> */}
        </div>
        
    </div>
  )
}

export default Mapp