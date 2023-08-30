import React, { useState, useEffect } from 'react';
import Weather1 from "./Components/weather";
import Weather2 from "./Components/weather2";
import "./App.css";
import Currency from './Components/currency';

function App() {
  return (
    <div className="container ">
      {/* <div className='row mt-3 '>
        <div className='col-md-6 weather1 p-3'>
          <Weather1></Weather1>
        </div>
        <div className='col-md-6 weather2 p-3'>
          <Weather2></Weather2>
        </div>
      </div> */}
      <div>
        <Currency></Currency>
      </div>
    </div>
  )
}
export default App;
