import sunny from '../assets/images/sun.png';
import cloudy from '../assets/images/cloudy1.png';
import rainy from '../assets/images/rainy.png';
import loadingGif from '../assets/images/loading.gif';
import { useState, useEffect } from 'react';


const WeatherApp = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [loading, setLoading] = useState(false)
  const api_key = '5ee5a585ab94abe7f719d966c10c9e7e'

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      setLoading(true);
      const defaultLocation = 'Montreal';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&units=Metric&appid=${api_key}`;
      const res = await fetch(url);
      const defaultData = await res.json();
      setData(defaultData);
      setLoading(false);
    }
    fetchDefaultWeather();
  }, []);


  const handleInputChange = (e) => {
    setLocation(e.target.value)
  };

  const weatherImages = {
    Clear: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Haze: cloudy,
    Mist: cloudy,
    Drizzle: rainy,
  }
  
  const weatherImage = data.weather ? weatherImages[data.weather[0].main] : null;


  const search = async () => {
    if(location.trim() !== "") {
    setLoading(true);
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${api_key}`
    const res = await fetch(url)
    const searchData = await res.json()
    if(searchData.cod !== 200) {
      setData( {notFound: true} )
    } else {
      setData(searchData)
    setLocation('')
    }
    setLoading(false);
    }
    
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      search()
    }
  }

  const backgroundImages = {
    Clear: 'linear-gradient(to bottom, #00c6ff, #0072ff)',
    Clouds: 'linear-gradient(to bottom, lightblue, #304352)',
    Rain: 'linear-gradient(to bottom, #d7d2cc, #304352)',
    Haze: 'linear-gradient(to bottom, #d7d2cc, #304352)',
    Mist: 'linear-gradient(to bottom, #d7d2cc, #304352)',
    Drizzle: 'linear-gradient(to bottom, #d7d2cc, #304352)',
  };

  const backgroundImage = data.weather ? backgroundImages[data.weather[0].main] : 'linear-gradient(to right, #00c6ff, #0072ff)';

  const currentDate = new Date();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const months = ['Jan', 
    'Feb', 
    'Mar', 
    'Apr', 
    'May', 
    'Jun', 
    'Jul', 
    'Aug', 
    'Sep', 
    'Oct', 
    'Nov', 
    'Dec'
  ];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  const month = months[currentDate.getMonth()];

  const dayOfMonth = currentDate.getDate();

  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  return (
    <div className="container" style={{backgroundImage}}>
      <div className="weather-app" style={{backgroundImage}}>
    <div className="search">
    <div className="search-bar">
       <input type="text" placeholder="Enter Location"
       value={location} onChange={handleInputChange}
       onKeyDown={handleKeyDown}/>
       <i className="fa-solid fa-magnifying-glass"
       onClick={search}></i>
       </div>
    </div>
    {loading ? (
      <img className='loader' src={loadingGif} alt="loading"/>
    ) : data.notFound ?  (<div className="not-found">Not Found 😔</div>

    ) : (
      <>

        <div className="search-top">
            <div className="location">{data.name}</div>
        </div>
       <div className="weather">
        <img src={weatherImage} alt="sunny" />
        <div className="weather-type">{data.weather ? data.weather[0].main: null}</div>
        <div className="temp">{data.main ? `${Math.floor(data.main.temp)}°C`: null}</div>
    </div>
    <div className="weather-date">
        <p>{formattedDate}</p>
    </div>
    <div className="weather-data">
        <div className="humidity">
            <div className="data-name">Humidity</div>
            <i className="fa-solid fa-droplet"></i>
            <div className="data">{data.main ? data.main.humidity : null}%</div>
        </div>
        <div className="wind">
            <div className="data-name">Wind</div>
            <i className="fa-solid fa-wind"></i>
            <div className="data">{data.wind ? data.wind.speed : null}km/h</div>
        </div>
    </div>
      </>
    )} 
   
    </div>
    </div>
  );
}
export default WeatherApp;