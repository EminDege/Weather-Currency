import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaExchangeAlt } from 'react-icons/fa';

function Currency() {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [inputValue, setInputValue] = useState();
    const [toCurrency, setToCurrency] = useState("TRY");
    const [score, setScore] = useState();
    const veri = useRef();

    const getData = async (fromCurrency) => {
        try {
            const { data } = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hDocEoNVuKqpbMOdsqTTGj7OUOOV08IUm56ZISSS&base_currency=${fromCurrency}`);
            veri.current = data.data;
        } catch (err) {
            alert("veri alınamadı!!");
        }
    }

    const handleFromCurrency = (e) => {
        setFromCurrency(e.target.value)
    }
    const handleToCurrency = (e) => {
        setToCurrency(e.target.value)
    }
    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const calculate = () => {
        if (veri.current === undefined) return;
        setScore(veri.current[toCurrency] * inputValue)
    }

    useEffect(() => {
        getData(fromCurrency);
    }, [fromCurrency])

    useEffect(() => {
        calculate();
    }, [inputValue, toCurrency, fromCurrency])


    return (
        <div className='currency p-3'>
            <h1>Currency</h1>
            <input className='' type="number" min="0" value={inputValue} onChange={handleInputValue}></input>
            <select onChange={handleFromCurrency}>
                <option value={"AUD"}>AUD</option>
                <option value={"BGN"}>BGN</option>
                <option value={"BRL"}>BRL</option>
                <option value={"CAD"}>CAD</option>
                <option value={"CHF"}>CHF</option>
                <option value={"CNY"}>CNY</option>
                <option value={"CZK"}>CZK</option>
                <option value={"DKK"}>DKK</option>
                <option value={"EUR"}>EUR</option>
                <option value={"GBP"}>GBP</option>
                <option value={"HKD"}>HKD</option>
                <option value={"HRK"}>HRK</option>
                <option value={"HUF"}>HUF</option>
                <option value={"IDR"}>IDR</option>
                <option value={"ILS"}>ILS</option>
                <option value={"INR"}>INR</option>
                <option value={"ISK"}>ISK</option>
                <option value={"JPY"}>JPY</option>
                <option value={"KRW"}>KRW</option>
                <option value={"MXN"}>MXN</option>
                <option value={"MYR"}>MYR</option>
                <option value={"NOK"}>NOK</option>
                <option value={"NZD"}>NZD</option>
                <option value={"PHP"}>PHP</option>
                <option value={"PLN"}>PLN</option>
                <option value={"RON"}>RON</option>
                <option value={"RUB"}>RUB</option>
                <option value={"SEK"}>SEK</option>
                <option value={"SGD"}>SGD</option>
                <option value={"THB"}>THB</option>
                <option value={"TRY"}>TRY</option>
                <option selected value={"USD"}>USD</option>
                <option value={"ZAR"}>ZAR</option>
            </select>
            <button className='m-3'><FaExchangeAlt size={25} color='#457B9D' /></button>
            <select onChange={handleToCurrency}>
                <option value={"AUD"}>AUD</option>
                <option value={"BGN"}>BGN</option>
                <option value={"BRL"}>BRL</option>
                <option value={"CAD"}>CAD</option>
                <option value={"CHF"}>CHF</option>
                <option value={"CNY"}>CNY</option>
                <option value={"CZK"}>CZK</option>
                <option value={"DKK"}>DKK</option>
                <option value={"EUR"}>EUR</option>
                <option value={"GBP"}>GBP</option>
                <option value={"HKD"}>HKD</option>
                <option value={"HRK"}>HRK</option>
                <option value={"HUF"}>HUF</option>
                <option value={"IDR"}>IDR</option>
                <option value={"ILS"}>ILS</option>
                <option value={"INR"}>INR</option>
                <option value={"ISK"}>ISK</option>
                <option value={"JPY"}>JPY</option>
                <option value={"KRW"}>KRW</option>
                <option value={"MXN"}>MXN</option>
                <option value={"MYR"}>MYR</option>
                <option value={"NOK"}>NOK</option>
                <option value={"NZD"}>NZD</option>
                <option value={"PHP"}>PHP</option>
                <option value={"PLN"}>PLN</option>
                <option value={"RON"}>RON</option>
                <option value={"RUB"}>RUB</option>
                <option value={"SEK"}>SEK</option>
                <option value={"SGD"}>SGD</option>
                <option value={"THB"}>THB</option>
                <option selected value={"TRY"}>TRY</option>
                <option value={"USD"}>USD</option>
                <option value={"ZAR"}>ZAR</option>
            </select>
            <input className='' type='number' value={score} readOnly></input>


        </div>
    )
}



export default Currency;



