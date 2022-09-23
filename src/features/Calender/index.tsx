import React, { useState, useEffect, createContext } from "react";
import DatePicker from "./Components/Date Picker";
import { DatePickerTypes } from "./index.types";
import styles from "./styles.module.css";
import Sidebar from "./Components/Sidabar";
import MonthData from "./calender.data";
import Context from "./Components/Context";
import { MonthYearSetterType } from "./index.types";

// Using The Context api to get the Selected Month or Year and set new values
export const MonthYearSetterContext = createContext<null | MonthYearSetterType>(
  null
);

function Calender() {
  // This is the variable where selected start date and end date is going to be stored
  const [selectedDate, setSelectedDate] = useState<DatePickerTypes>({
    startDate: null,
    endDate: null,
  });
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const year = today.getFullYear();
  // This is for current selected Month
  const [selectedMonth, setSelectedMonth] = useState<number>(month);
  // This is for current selected year
  const [selectedYear, setSelectedYear] = useState<number>(year);
  // This is the array where all the days are going to be
  const [daysArray, setDaysArray] = useState<Array<number>>([]);

  useEffect(() => {
    // When my selected month changes I want to recalculate the no. of days in the month.
    const days: Array<number> = [];
    for (let i = 1; i <= MonthData[selectedMonth].daysInMonth; i++) {
      days.push(i);
    }
    setDaysArray(days);
  }, [selectedMonth]);
  return (
    <Context
      MonthYearSetter={{
        selectedMonth,
        setSelectedMonth,
        setSelectedYear,
        selectedYear,
      }}
      MonthYearSetterContext={MonthYearSetterContext}
    >
      <div className={styles.calender}>
        <div className={styles.datePicker}>
          {/* This is the Left side Component For chosing Dates  */}
          <DatePicker
            daysArray={daysArray}
            currentDate={date}
            isCurrentMonth={selectedMonth === month}
            isCurrentYear={selectedYear === year}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
        </div>
        <div className={styles.sidebar}>
          {/* This is the right side component for choosing the Month and the Year */}
          <Sidebar />
        </div>
      </div>
    </Context>
  );
}

export default Calender;
