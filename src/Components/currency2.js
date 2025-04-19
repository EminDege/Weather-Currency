import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Currency2() {
    const [usdToTry, setUsdToTry] = useState('');
    const [eurToTry, setEurToTry] = useState('');
    const [eurToUsd, setEurToUsd] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_hDocEoNVuKqpbMOdsqTTGj7OUOOV08IUm56ZISSS&base_currency=USD");
                const veri = data.data;
                const usdToTry = veri["TRY"];
                const usdToEur = veri["EUR"];
                const eurToTry = usdToTry / usdToEur;
                const eurToUsd = 1 / usdToEur;
                setUsdToTry(usdToTry);
                setEurToTry(eurToTry);
                setEurToUsd(eurToUsd);
            } catch (err) {
                alert("Data could not be received!!");
            }
        }

        fetchData();
    }, []);

    return (
        <div >
            <h3> 1 DOLLAR = {parseFloat(usdToTry).toFixed(3)} TL </h3>
            <h3> 1 EURO = {parseFloat(eurToTry).toFixed(3)} TL </h3>
            <h3> 1 EURO = {parseFloat(eurToUsd).toFixed(3)} DOLLAR </h3>
        </div>
    );
}

export default Currency2;
