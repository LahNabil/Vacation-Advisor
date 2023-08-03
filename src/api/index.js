import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
  
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '8dc7bb820amshe24702d1b847081p1c2f08jsn58f78c1e32ff',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};
export const getPlacesData = async () => {
    try{
        const {data: {data}} = await axios.get(URL, options);
        return data;
    }catch(error){
         console.log(error)
    }
}