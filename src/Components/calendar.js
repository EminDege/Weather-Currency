import React, { useState } from 'react';
import './calendar.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentDate] = useState(new Date()); // Geçerli tarihi al
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const firstDayOfWeek = firstDayOfMonth.getDay(); // Haftanın gününü alır (0'dan başlayarak)


    const renderHeader = () => {
        const dateFormat = "MMMM yyyy";
        const options = { year: 'numeric', month: 'long' };
        const locale = 'en-US';
        return (
            <div className="calendar-header">
                <div className="calendar-month">
                    <button className='button2' onClick={goToPreviousMonth}><IoIosArrowBack size={25} color='#000' /></button>
                    <span className='monthName'> {selectedDate.toLocaleDateString(locale, options)}{" "}</span>
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
        const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const firstDayOfWeek = firstDayOfMonth.getDay(); // Haftanın gününü alır (0'dan başlayarak)
        const monthEnd = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
        const startDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1 - firstDayOfWeek);
        const endDate = new Date(monthEnd.getFullYear(), monthEnd.getMonth() + 1, 6 - monthEnd.getDay());
        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const isCurrentMonth = day.getMonth() === selectedDate.getMonth();
                const isCurrentDay = day.toDateString() === currentDate.toDateString();
                const isFirstDayOfMonth = day.getDate() === 1;

                days.push(
                    <div
                        className={`calendar-cell ${isCurrentMonth ? "current-month" : "other-month"} ${isCurrentDay ? "current-day" : ""} ${isFirstDayOfMonth ? "first-day-of-month" : ""}`}
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
