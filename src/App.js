import React, { useState, useEffect } from 'react';
import Weather1 from "./Components/weather";
import Weather2 from "./Components/weather2";
import "./App.css";
import Currency from './Components/currency';
import Currency2 from './Components/currency2';
import Clock from './Components/clock';
import Stopwatch from './Components/stopwacth';
import CountdownTimer from './Components/countDownTimer';

function App() {
  return (
    <div className="container ">
      <div className='row mt-3 '>
        <div className='col-md-6 weather1 p-3'>
          <Weather1></Weather1>
        </div>
        <div className='col-md-6 weather2 p-3'>
          <Weather2></Weather2>
        </div>
      </div>
      <div className='row'>
        <div className='currency col-md-8'>
          <Currency />
        </div>
        <div className='currency2 col-md-4'>
          <Currency2 />
        </div>
      </div>
      <div className='row'>
        <div className='clock col-md-2'><Clock /></div>
        <div className='clock col-md-2'><Stopwatch /></div>
        <div className='clock col-md-2'><CountdownTimer /></div>

      </div>
    </div>
  )
}
export default App;
