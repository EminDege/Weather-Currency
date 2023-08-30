import React, { useEffect } from 'react';
import axios from 'axios';
import { FaExchangeAlt } from 'react-icons/fa';

function Currency() {

    const baseurl = axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hDocEoNVuKqpbMOdsqTTGj7OUOOV08IUm56ZISSS")
        .then(response => {
            const data = response.data;
            console.log(data);
        })




    useEffect(() => {


    }, [])


    return (
        <div className='currency p-3'>
            <h1>Currency</h1>
            <input className='' type="number" min="0" value=""></input>
            <select>
                <option>hi</option>
            </select>
            <button className='m-3'><FaExchangeAlt size={25} color='#457B9D' /></button>
            <select>
                <option>hi</option>
            </select>
            <input className='' type='number' readOnly></input>


        </div>
    )
}



export default Currency;



// AUD
// BGN
// BRL
// CAD
// CHF
// CNY
// CZK
// DKK
// EUR
// GBP
// HKD
// HRK
// HUF
// IDR
// ILS
// INR
// ISK
// JPY
// KRW
// MXN
// MYR
// NOK
// NZD
// PHP
// PLN
// RON
// RUB
// SEK
// SGD
// THB
// TRY
// USD
// ZAR