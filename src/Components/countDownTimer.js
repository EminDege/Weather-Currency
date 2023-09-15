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
        const newValue = parseInt(e.target.value);
        if (!isActive && newValue >= 0 && newValue <= 59) {
            setInitialMinutes(newValue);
            setMinutes(newValue);
        }
    };

    const handleSecondChange = (e) => {
        const newValue = parseInt(e.target.value);
        if (!isActive && newValue >= 0 && newValue <= 59) {
            setInitialSeconds(newValue);
            setSeconds(newValue);
        }
    };

    const formatTime = (value) => {
        return value.toString().padStart(2, '0');
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
                    {isActive ? "Stop" : "Start"}
                </button>
                <button onClick={resetTimer} disabled={isActive && (minutes !== 0 || seconds !== 0)}>Reset</button>
            </div>
            <div>
                <p className='time'>{`${formatTime(minutes)}:${formatTime(seconds)}`}</p>
            </div>
        </div>
    );
}

export default CountdownTimer;
