
import './App.css';
import {Search, MapPin, Wind} from 'react-feather';
import getWeather from './API/api';
import { useState } from 'react';

function App() {

  const [ city, setCity ] = useState("");
  const [ weather, setWeather ] = useState({});

  const getWeatherbyCity = async () => {
    const weatherData = await getWeather(city);
    setWeather(weatherData);
    setCity("");
  }

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-wrapper">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='Enter a City Name'/>
        <button onClick={() => getWeatherbyCity()}>
          <Search></Search>
        </button>
      </div>

      {
        weather && weather.weather && 
        <div className="content">
        <div className="location d-flex">
          <MapPin></MapPin>
          <h2>Pakistan <span>(GB)</span></h2>
        </div>
        <p className="datetext">17 May 2024</p>

        <div className="weatherdesc">
          <img src="" alt="" />
          <h3>Clear Sky</h3>
        </div>

        <div className="tempstats d-flex flex-c">
          <h1>43 <span>&deg;C</span></h1>
          <h3>Feels Like <span>&deg;C</span></h3>
        </div>

        <div className="windstats d-flex">
          <Wind></Wind>
          <h3>Wind is 20 Knots 45&deg;</h3>
        </div>
      </div>
      }

      

      <div className="content">
        <h4>No Data Found.</h4>
      </div>
    </div>
  );
}

export default App;
