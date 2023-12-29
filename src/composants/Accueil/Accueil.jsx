import React, { useEffect, useRef } from 'react'
import './Accueil.css'
import { TweenMax, Power3 } from 'gsap'
import { Link } from 'react-router-dom';


function Acceuil() {
    let logoItem = useRef(null)
    let p1 = useRef(null)
    useEffect(()=>{
        console.log(logoItem)
        TweenMax.to(
            logoItem,
            4.5,
            {
                opacity:1,
                y:-40,
                ease:Power3.easeOut
            }
        )
        TweenMax.to(
            p1,
            4.5,
            {
                opacity:1,
                y:-40,
                ease:Power3.easeOut
            }
        )
    },[])
   
    return (
        <div className='hero-wrapper'>
        <div className='hero-section'>
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1 style={{opacity:0}} ref={el => {logoItem = el}}>
                    Explorez<br/>
                    Dégustez<br/>
                    Créez: Une Vie de Voyages Mémorables
                    
                    
                    </h1>
                </div>
                <div className="flexColStart hero-des" style={{opacity:0}} ref={el => {p1 = el}}>
                    
                    <button className='hero-des'>
                    <Link to="/travel">Devouvrez notre univers des hotels et des restaurants dans le monde entier</Link>
                        </button>

                    
                </div>
        </div>
        </div>
        
    );
}

export default Acceuil;