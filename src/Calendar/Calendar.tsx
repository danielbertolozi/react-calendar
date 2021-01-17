import React from "react";
import styles from "./Calendar.module.css";

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function Calendar() {
    const [displayedMonth, setDisplayedMonth] = React.useState(0);
    const [displayedYear, setDisplayedYear] = React.useState(2021);

    return <div
        className={styles.container}>
        <table>
            <thead>
                <tr>
                    { DAYS_OF_WEEK.map((day) => <td>{day}</td>) }
                </tr>
            </thead>
            { buildCalendar(displayedMonth, displayedYear) }
        </table>
    </div>;
}

function buildCalendar(month: number, year: number) {
    const COLUMNS = 7;
    const ROWS = 6;
    let rows = [];
    for (let i = 0; i < ROWS; i++) {
        let columns = [];
        for (let j = 0; j < COLUMNS; j++) {
            columns.push(<td>{j}</td>);
        }
        rows.push(<tr>{columns}</tr>);
    }
    return <tbody>{rows}</tbody>;
}

function getNumberOfDaysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

function getDayOfWeekInWhichTheMonthBegins(month: number, year: number) {
    return new Date(year, month, 1).getDay();
}