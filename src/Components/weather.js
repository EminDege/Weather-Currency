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
            console.log(data);
            setWeather(data);
        }
        catch {
            alert("veriler çekilemedi")
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
            <div>
                <h3>Enlem Koordinant: {latitude}</h3>
                <h3>Boylam Koordinant: {longitude}</h3>
                <h3>Koordinat Bölgesi: {weather.name} </h3>
                <h3>Hava Sıcaklığı (C): {Math.round(weather.main.temp - 273.15)} </h3>
                <h3>Nem (%): {weather.main.humidity} </h3>
                <h3>Durumu: {weather.weather.map(data => data.main)} </h3>
                <h3>Özelliği: {weather.weather.map(data => data.description)}</h3>
                <h3>Rüzgar Hızı (km/s): {weather.wind.speed}</h3>

            </div >
        );
    };

    return (
        <div className="App">
            <h2>HAVA DURUMU (Your Location)</h2>
            {renderWeatherData()}
        </div>
    )

}

export default Weather1;
