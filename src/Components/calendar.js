import React, { useState } from 'react';
import './calendar.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const renderHeader = () => {
        const dateFormat = "MMMM yyyy";
        return (
            <div className="calendar-header">
                <div className="calendar-month">
                    <button className='button2' onClick={goToPreviousMonth}><IoIosArrowBack size={25} color='#000' /></button>
                    {selectedDate.toLocaleDateString(undefined, { month: 'long' })}{" "}
                    {selectedDate.getFullYear()}
                    <button className='button2' onClick={goToNextMonth}><IoIosArrowForward size={25} color='#000' /></button>
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const days = [];

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="calendar-day" key={i}>
                    {weekdays[i]}
                </div>
            );
        }

        return <div className="calendar-days">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const monthEnd = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
        const startDate = new Date(monthStart.getFullYear(), monthStart.getMonth(), 1);
        const endDate = new Date(monthEnd.getFullYear(), monthEnd.getMonth() + 1, 0);
        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                days.push(
                    <div
                        className={`calendar-cell ${day.getMonth() === selectedDate.getMonth() ? "current-month" : "other-month"}`}
                        key={day}
                    >
                        {day.getDate()}
                    </div>
                );
                day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
            }

            rows.push(
                <div className="calendar-row" key={day}>
                    {days}
                </div>
            );

            days = [];
        }

        return <div className="calendar-body">{rows}</div>;
    };

    const goToPreviousMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
    };

    return (
        <div className="calendar">
            {renderHeader()}
            {renderDays()}
            {renderCells()}
        </div>
    );
}

export default Calendar;
