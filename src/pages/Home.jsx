import React from 'react'
import Header from '../composants/Header/Header'
import Acceuil from '../composants/Accueil/Accueil'
import Hotel from '../composants/Hotels/Hotel'

const Home = () => {
  return (
    <div>
      <Header/>
      <Acceuil/>
      <Hotel/>
    </div>
    
    
  )
}

export default Home