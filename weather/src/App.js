import React, { useState, useEffect } from 'react';
import Weather from './component/Weather';
import './App.css';

function App() {
  const [lat, setLat] = useState([]); //Latitude
  const [long, setLong] = useState([]); //Longitude
  const [data, setData] = useState([]); //Weather Data
  let componentMounted = true;
  const fetchData = async () =>{
    navigator.geolocation.getCurrentPosition(
      function(position){
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(lat);
        console.log(long)
      }
    )
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2cea58e20ad0b0dcc2f54eb2441aab9e`);
    if(componentMounted){
      setData(await response.json());
      console.log(data);
    }
    return () => {
      componentMounted =false
    }
  }
  useEffect(() => {
    fetchData();
  }, [lat, long]);

  return (
    <>
     {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
        ): (
          <div></div>
        )}
      
    </>
  );
}

export default App;
