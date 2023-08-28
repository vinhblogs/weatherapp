import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const apiKeys="37caab5d3144ad88882cc0d73a16f905"
  const [weatherData,setWeatherData]=useState([{}])
  const [city,setCity]=useState("")

  const getWeather =(e)=>{
    if(e.key=="Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys}`)
      .then(response=>response.json())
      .then(data=>setWeatherData(data))
    }
  }
  return (
    <div className='container'>
      <input 
      placeholder='enter city...'
      onChange={e=>setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}/>

      {typeof weatherData.main==="undefined"?(
        <div>
          <p>welcome to weather app. enter the city</p>
        </div>
      ):(
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{(Math.round(weatherData.main.temp)-32)*5/9}C</p>
          {console.log((Math.round(weatherData.main.temp)-32)*5/9)}
          <p className='weather'>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>

    

  )
}

export default App
