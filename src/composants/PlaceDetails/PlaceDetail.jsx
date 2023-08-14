import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import './style.css'
import Rating from '@mui/material/Rating';

const PlaceDetail = ({place, selected, refProp}) => {
  if(selected) refProp?.current?.scollIntoView({behavior: "smooth", block:"start"})

  return (
    <Card elevation={6}>
      <CardMedia 
        style={{height: 350}}
        image={place.photo ? place.photo.images.large.url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2022/10/healthy-restaurant-dinner.jpg?quality=82&strip=1'}
        title={place.name}
        />
        <CardContent>
            <Typography gutterBottom variant='h5'>{place.name}</Typography>
            <Box display="flex" justifyContent="space-between">
            <Rating value={Number(place.rating)} readOnly />
                <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews} reviews</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant='subtitle1'>Price</Typography>
                <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <Typography variant='subtitle1'>Ranking</Typography>
                <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
            </Box>
            {place?.awards?.map((award) => (
              <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
            ))}
            {place?.cuisine?.map(({name})=>
            <Chip key={name} size="small" label={name} className='chip' />
            )}
            {place?.address && (
              <Typography gutterBottom variant='subtitle2' color="textSecondary" className='subtitle'>
                <LocationOnIcon/> {place.address}
              </Typography>
            )}
            {place?.phone && (
              <Typography gutterBottom variant='subtitle2' color="textSecondary" className='spacing'>
                <LocalPhoneIcon/> {place.phone}
              </Typography>
            )}
            <CardActions>
              <Button size='small' color='primary' onClick={()=> window.open(place.web_url,'_blank')}>
                Trip Advisor
              </Button>
              <Button size='small' color='primary' onClick={()=> window.open(place.website,'_blank')}>
                WebSite
              </Button>
            </CardActions>
        </CardContent>

    </Card>
    
  )
}

export default PlaceDetail