
import './App.css';
import Header from './composants/Header/Header';
import Map from './composants/Map/Map'
import List from './composants/List/List';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <div className='container1'>
          <List/>
        </div>
        <div className='container2'>
          <Map/>
        </div>
      </div>
    </div>  
    
    
  );
}

export default App;
