
import './App.css';
import {Search, MapPin, Wind} from 'react-feather';

function App() {
  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="input-wrapper">
        <input type="text" />
        <button>
          <Search></Search>
        </button>
      </div>

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
          <h3>Wind is hot in pakistan &deg;</h3>
        </div>

      </div>
    </div>
  );
}

export default App;
