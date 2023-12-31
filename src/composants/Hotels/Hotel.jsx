import React,{useState,useEffect} from 'react'
import {Swiper, SwiperSlide,useSwiper} from 'swiper/react'
import "swiper/css"
import { sliderSettings } from '../../utils/common'
import { Link } from 'react-router-dom';
import "./Hotel.css" 


const Hotel = () => {
    const [hotels, setHotel] = useState([]);
    useEffect(() => {
        
        fetch('http://localhost:8080/hotels') 
          .then((response) => {
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            return response.json();
          })
          .then((data) => {
            setHotel(data); // Mettez à jour le state avec les données reçues
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des données :', error);
          });
      }, []);
  return (
    <section className='r-wrapper'>
        <div className='padding innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className="orangeText">Meilleurs choix</span>
                <span className='primaryText'>Liste des Hotels</span>
            </div>
            <Swiper {...sliderSettings} autoplay={{ delay: 3000}}>
                <SliderButtons/>
                {hotels.map((hotel, i) => (
                    <SwiperSlide key={i}>
                      <Link to={`/batterydetails/${hotel.id}`}>
                        <div className='flexColStart r-card'>
                            <img src={hotel.photo} alt="hotel" />
                            <span className="secondaryText r-price">
                            
                            
                            </span>

                            <span className='primaryText'>
                                {hotel.nom}
                            </span>
                            <span className='secondaryText'>{hotel.adresse}</span>
                            <span className='orangeTextt '>{hotel.description}</span>
                        </div>
                        </Link>
                    </SwiperSlide>
            ))}
</Swiper>
        </div>
    </section>
  )
}

export default Hotel
const SliderButtons = ()=>{
    const swiper = useSwiper();
    return (
        <div className="r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}