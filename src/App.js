import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import Travel from './pages/Travel'
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';



function App() {
  
  // const [token, setToken] = useState(localStorage.getItem('token'))
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<LoginPage/>} />
          </Routes>
      </BrowserRouter>
    </div>
);
  }

export default App;
