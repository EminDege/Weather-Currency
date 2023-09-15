import React, { useState, useEffect } from 'react';

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedTime = currentTime.toLocaleTimeString(undefined, options);

    return (
        <div className="clock">
            <h4>Time:</h4>
            <p className='time'>{formattedTime}</p>
        </div>
    );
}

export default Clock;
