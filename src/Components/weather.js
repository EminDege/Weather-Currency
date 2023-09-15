import React, { useState, useEffect } from 'react';
import { usePosition } from 'use-position';
import axios from 'axios';


function Weather1() {
    const [weather, setWeather] = useState();
    const { latitude, longitude, error } = usePosition();

    const getWeatherData = async (lat, lon) => {
        const key = "44d336030fadcd668e9b025c6b81629d"
        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)

            setWeather(data);
        }
        catch {
            alert("Data could not be received !")
        }
    }

    useEffect(() => {
        latitude && longitude && getWeatherData(latitude, longitude)
    }, [latitude, longitude]);

    const renderWeatherData = () => {
        if (!weather && !error) {
            return <h3>Loading...</h3>;
        }
        if (error) {
            return <h3>Location not found</h3>
        }
        return (
            <div className='subTitle'>
                <h3><span>Latitude  </span>: {latitude}</h3>
                <h3><span>Longitude </span>: {longitude}</h3>
                <h3><span>Location </span>: {weather.name} </h3>
                <h3><span>Temperature (C)</span>: {Math.round(weather.main.temp - 273.15)} </h3>
                <h3><span>Humidty (%)           </span>: {weather.main.humidity} </h3>
                <h3><span>Situation            </span>: {weather.weather.map(data => data.main)} </h3>
                <h3><span>Feature         </span>: {weather.weather.map(data => data.description)}</h3>
                <h3><span>Wind Speed(km/s)</span>: {weather.wind.speed}</h3>

            </div >
        );
    };

    return (
        <div className="App">
            <h2>WEATHER (Your Location)</h2>
            {renderWeatherData()}
        </div>
    )

}

export default Weather1;
