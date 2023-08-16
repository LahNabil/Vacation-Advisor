import React, {useState, useEffect, createRef} from 'react'
import './style.css'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import PlaceDetail from '../PlaceDetails/PlaceDetail'
const List = ({places, childClicked, isLoading, type, setType, rating, setRating}) => {

    
    const [elRefs, setElRefs] = useState([]);
    useEffect(()=> {
        const refs = Array(places?.length).fill().map((_,i) => elRefs[i] || createRef());

        setElRefs(refs)
    }, [places]);
   
  return (
    <div className='containerList'>
        <Typography variant='h4'> Restaurants, Hotels & Attractions</Typography>
        {isLoading? (
            <div className='loading'>
                <CircularProgress size="5rem"/>
            </div>    
        ) : (
            <>
        <div className='formControlWrapper'>
        <FormControl className='formControl'>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e)=> setType(e.target.value)} className='selectL'>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
        </FormControl>
        <FormControl className='formControl'>
            <InputLabel className='inputLabel'>Rating</InputLabel>
            <Select value={rating} onChange={(e)=> setRating(e.target.value)} className='selectL'>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3</MenuItem>
                <MenuItem value={4}>Above 4</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
        </FormControl>
        </div>
        <Grid container spacing={3} className='gridL'>
            {places?.map((place, i )=>(
                <Grid item key={i} xs={12}>
                    <PlaceDetail
                        place={place}
                        selected={Number(childClicked)===i}
                        refProp={elRefs[i]}
                    />
                </Grid>
            ))}
        </Grid>
        </>
        )}
        
        
    </div>
  );
}

export default List