
import './App.css';
import Header from './composants/Header/Header';
import Map from './composants/Map/Map'
import List from './composants/List/List';
import { getPlacesData } from './api';
import React, {useState, useEffect} from 'react';

function App() {
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude , longitude}})=>{
        setCoordinates({lat: latitude, lng: longitude})
    })
  },[]);

  

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat: 48.8584, lng: 2.2945});
  const [bounds,setBounds] = useState({});
  const [childClicked, setChildClicked]= useState(null);

  const[isLoading, setIsLoading]=useState(false);
  const [type,setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [filteredPlaces, setFilteredPlaces]=useState([])

  useEffect(()=>{
    const filteredPlaces = places.filter((place)=> place.rating > rating)
    setFilteredPlaces(filteredPlaces);
  }, [rating])

  useEffect(()=> {
    setIsLoading(true);
    getPlacesData(type,bounds.sw, bounds.ne)
    .then((data)=> {
      console.log(data);
      setPlaces(data);
      setFilteredPlaces([])
      setIsLoading(false);
    })
  },[type,coordinates, bounds]);
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='container1'>
          <List 
            places={filteredPlaces.length ? filteredPlaces: places}
            childClicked={childClicked}  
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </div>
        <div className='container2'>
          <Map
          setCoordinates={setCoordinates}
          setBounds= {setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length ? filteredPlaces : places}
          setChildClicked={setChildClicked}
          />
        </div>
      </div>
    </div>  
    
    
  );
}

export default App;
