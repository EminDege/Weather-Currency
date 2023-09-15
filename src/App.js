import React, { useState } from 'react';
import "./App.css";
import Weather1 from "./Components/weather";
import Weather2 from "./Components/weather2";
import Currency from './Components/currency';
import Currency2 from './Components/currency2';
import Clock from './Components/clock';
import Stopwatch from './Components/stopwatch';
import CountdownTimer from './Components/countDownTimer';
import Calendar from './Components/calendar';

function App() {
  const [currencyMain, setCurrencyMain] = useState(false);
  const [weatherMain, setWeatherMain] = useState(false);
  const [clockMain, setClockMain] = useState(false);
  const [showHello, setShowHello] = useState(true);

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);


    document.body.className = buttonName;

    setCurrencyMain(false);
    setWeatherMain(false);
    setClockMain(false);

    setShowHello(false);

    if (buttonName === 'Currency') {
      setCurrencyMain(true);
    } else if (buttonName === 'Weather') {
      setWeatherMain(true);
    } else if (buttonName === 'Clock') {
      setClockMain(true);
    }
  };

  return (
    <div className={`App ${selectedButton}`}>
      <div className='container '>
        <div className='buttons'>
          <button className={selectedButton === 'Currency' ? 'selectedCurrency' : ''} onClick={() => handleButtonClick('Currency')}>Currency</button>
          <button className={selectedButton === 'Weather' ? 'selectedWeather' : ''} onClick={() => handleButtonClick('Weather')}>Weather</button>
          <button className={selectedButton === 'Clock' ? 'selectedClock' : ''} onClick={() => handleButtonClick('Clock')}>Clock</button>
        </div>
        {showHello && <div className='welcome'>Welcome,
          please click a button...</div>}
        {currencyMain && (
          <div className='currencyMain'>
            <div className='currency'>
              <Currency />
            </div>
            <div className='currency2'>
              <Currency2 />
            </div>
          </div>
        )}

        {weatherMain && (
          <div className='row weatherMain '>
            <div className='col-lg-6 weather1 p-3'>
              <Weather1></Weather1>
            </div>
            <div className='col-lg-6 weather2 p-3'>
              <Weather2></Weather2>
            </div>
          </div>
        )}

        {clockMain && (
          <div className='row clockMain'>
            <div className='clock col-md-6 pt-0'><Clock />
              <div className='clock2'> <Stopwatch /> <CountdownTimer /></div>
            </div>
            <div className='calendarmain col-md-6'><Calendar /></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App;
