import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Weather2() {
    const [weather, setWeather] = useState();
    const [cityName, setcityName] = useState('');

    const handleChange = (e) => {
        setcityName(e.target.value);
    };

    const getWeatherData = async (cityName) => {
        const key = "44d336030fadcd668e9b025c6b81629d"

        try {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
            console.log(data);
            setWeather(data);
        }
        catch {

        }
    }

    useEffect(() => {
        cityName && getWeatherData(cityName)
    }, [cityName]);

    const renderWeatherData = () => {
        if (!weather) {
            return <h3>City Name Pending...</h3>;
        }
        return (
            <div>

                <h3>Konum: {weather.name} </h3>
                <h3>Hava Sıcaklığı (C): {Math.round(weather.main.temp - 273.15)} </h3>
                <h3>Nem (%): {weather.main.humidity} </h3>
                <h3>Durumu: {weather.weather.map(data => data.main)} </h3>
                <h3>Özelliği: {weather.weather.map(data => data.description)}</h3>
                <h3>Rüzgar Hızı (km/s): {weather.wind.speed}</h3>
            </div >
        );
    };


    return (
        <div>
            <h2>HAVA DURUMU</h2>
            <h3>Şehir giriniz:</h3> <input type="text" value={cityName} onChange={handleChange} />
            {renderWeatherData()}

        </div>
    )
}



export default Weather2;