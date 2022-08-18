import React from "react";

const Weather = ({weatherData}) => {
  const refresh = () =>{
    window.location.reload();

  };
  let temp = (weatherData.main.temp - 273.15).toFixed(2);
  let mintemp = (weatherData.main.temp_min - 273.15).toFixed(2);
  let maxtemp = (weatherData.main.temp_max - 273.15).toFixed(2);

  var d = new Date();
  var date = d.getDate();
  var year = d.getFullYear();
  var month = d.toLocaleString('default' , {month : 'long'});
  var day = d.toLocaleString('default' , {weekday : 'long'});
  return (
    <>
    <div className="container mt-5">
      <div className="row justify-contect-center">
        <div className="col-sm-4">
          <div className="card text-bg-primary mb-3 shadow-lg text-center">
            <div className="card-header">WeatherMan
            <i className="fa fa-refresh float-end pt-1" onClick={refresh} ></i>
            </div>

            <div className="card-body py-5">
              <h5 className="card-title mb-0">{weatherData.name}</h5>
              <p className="card-text lead mb-5">
               {day} ,{month} {date} ,{year}
               <hr/>
              </p>
              
              <h1 className="display-5 fw-bold mb-5">{temp} &deg;C
              <hr/> </h1>
              <p className="lead fw-bold mb-0">{weatherData.weather[0].main}</p>
              
              <p className="fw-bold mb-5">{mintemp}&deg;C | {maxtemp}&deg;C</p>
              <p className="lead">Humidity: {weatherData.main.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Weather;
