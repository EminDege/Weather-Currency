import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const [initialMinutes, setInitialMinutes] = useState(0);
    const [initialSeconds, setInitialSeconds] = useState(0);
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval;

        if (isActive && (minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        setIsActive(false);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else if (!isActive && (minutes !== 0 || seconds !== 0)) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, minutes, seconds]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(initialMinutes);
        setSeconds(initialSeconds);
    };

    const handleMinuteChange = (e) => {
        if (!isActive) {
            setInitialMinutes(e.target.value);
            setMinutes(e.target.value);
        }
    };

    const handleSecondChange = (e) => {
        if (!isActive) {
            setInitialSeconds(e.target.value);
            setSeconds(e.target.value);
        }
    };

    return (
        <div>
            <h4>Countdown</h4>
            <div>
                <input
                    type="number"
                    placeholder="Min"
                    value={initialMinutes}
                    onChange={handleMinuteChange}
                    disabled={isActive}
                    style={{ width: "50px" }}
                />
                <input
                    type="number"
                    placeholder="Sec"
                    value={initialSeconds}
                    onChange={handleSecondChange}
                    disabled={isActive}
                    style={{ width: "50px" }}
                />
            </div>
            <div>
                <button onClick={toggleTimer}>
                    {isActive ? "Durdur" : "Başlat"}
                </button>
                <button onClick={resetTimer} disabled={isActive && (minutes !== 0 || seconds !== 0)}>Sıfırla</button>
            </div>
            <div>
                <p>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</p>
            </div>
        </div>
    );
}

export default CountdownTimer;
