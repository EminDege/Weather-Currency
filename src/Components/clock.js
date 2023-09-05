import React, { useState, useEffect } from 'react';

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // 1 saniyede bir güncelle
        return () => clearInterval(intervalId); // bileşen temizlendiğinde aralığı temizle
    }, []);

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    return (
        <div>
            <h4>Saat:</h4>
            <p>{`${hours}:${minutes}:${seconds}`}</p>
        </div>
    );
}

export default Clock;
