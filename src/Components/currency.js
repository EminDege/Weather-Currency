import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';

function Currency() {
    const [baseCurrency, setBaseCurrency] = useState("USD");
    const [inputValue, setInputValue] = useState("");
    const [targetCurrency, setTargetCurrency] = useState("TRY");
    const [conversionRate, setConversionRate] = useState(0);

    const fetchExchangeRate = async () => {
        try {
            const response = await axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hDocEoNVuKqpbMOdsqTTGj7OUOOV08IUm56ZISSS&base_currency=${baseCurrency}`);
            const data = response.data.data;
            setConversionRate(data[targetCurrency]);
        } catch (err) {
            console.error("Data could not be received!!");
        }
    }

    const handleBaseCurrencyChange = (e) => {
        setBaseCurrency(e.target.value);
    }

    const handleTargetCurrencyChange = (e) => {
        setTargetCurrency(e.target.value);
    }

    const handleInputValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleCalculate = () => {
        fetchExchangeRate();
    }

    useEffect(() => {
        fetchExchangeRate();
    }, [baseCurrency, targetCurrency]);

    return (
        <div className='currency p-3'>
            <h1>Currency</h1>
            <div className='d-sm-flex my-5' style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div className='d-flex' style={{ justifyContent: 'center' }}>
                    <input className='' type="number" min="0" value={inputValue} onChange={handleInputValueChange}></input>
                    <select onChange={handleBaseCurrencyChange} value={baseCurrency}>
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
                </div>
                <button className='m-3' onClick={handleCalculate}><FaArrowRight size={25} color='#008000' /></button>
                <div className='d-flex' style={{ justifyContent: 'center' }}>
                    <input className='order-sm-1' type='number' value={conversionRate * inputValue} readOnly></input>
                    <select className='order-sm-0' onChange={handleTargetCurrencyChange} value={targetCurrency}>
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

                </div>
            </div>
        </div>
    )
}

export default Currency;
