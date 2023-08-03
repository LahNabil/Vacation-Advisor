
import './App.css';
import Header from './composants/Header/Header';
import Map from './composants/Map/Map'
import List from './composants/List/List';
import { getPlacesData } from './api';
import React, {useState, useEffect} from 'react';

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds,setBounds] = useState(null);

  useEffect(()=> {
    getPlacesData()
    .then((data)=> {
      console.log(data);
      setPlaces(data);
    })
  },[]);
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='container1'>
          <List/>
        </div>
        <div className='container2'>
          <Map
          setCoordinates={setCoordinates}
          setBounds= {setBounds}
          coordinates={coordinates}
          />
        </div>
      </div>
    </div>  
    
    
  );
}

export default App;
