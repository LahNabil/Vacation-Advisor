import React from 'react'
import Header from '../composants/Header/Header'
import Acceuil from '../composants/Accueil/Accueil'
import Hotel from '../composants/Hotels/Hotel'
import Footer from '../composants/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Acceuil/>
      <Hotel/>
      <Footer/>
    </div>
    
    
  )
}

export default Home