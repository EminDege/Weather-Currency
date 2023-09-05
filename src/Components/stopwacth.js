import React, { useState, useRef } from 'react';

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);

    const startStop = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
        } else {
            const startTime = Date.now() - elapsedTime;
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime);
            }, 10); // Her 10 milisaniyede bir güncelle (0.01 saniye)
        }
        setIsRunning(!isRunning);
    };

    const reset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setElapsedTime(0);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = time % 1000;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    };

    return (
        <div className="stopwatch">
            <h4>Kronometre</h4>
            <div className="time">{formatTime(elapsedTime)}</div>
            <div className="buttons">
                <button onClick={startStop}>{isRunning ? 'Durdur' : 'Başlat'}</button>
                <button onClick={reset}>Sıfırla</button>
            </div>
        </div>
    );
}

export default Stopwatch;
