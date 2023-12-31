
import Header from '../composants/Header/Header';
import Map from '../composants/Map/Map'
import List from '../composants/List/List';
import { getPlacesData } from '../api';
import React, {useState, useEffect} from 'react';
import Footer from '../composants/Footer/Footer';

function Travel() {
  
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
    if(bounds.sw && bounds.ne){
    setIsLoading(true);
    getPlacesData(type,bounds.sw, bounds.ne)
    .then((data)=> {
      setPlaces(data?.filter((place)=> place.name && place.num_reviews > 0));
      setFilteredPlaces([])
      setIsLoading(false);
    })
  }
  },[type, bounds]);
  return (
    <div className="App">
      <Header setCoordinates={setCoordinates} />
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
      <Footer/>
    </div>  
    
    
    
  );
}

export default Travel;
