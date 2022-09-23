import React, { useState, useEffect, createContext } from "react";
import DatePicker from "./Components/Date Picker";
import { DatePickerTypes } from "./index.types";
import styles from "./styles.module.css";
import Sidebar from "./Components/Sidabar";
import MonthData from "./calender.data";
import calculateIsPast from "./utils/isPast";
import Context from "./Components/Context";
import { MonthYearSetterType } from "./index.types";

export const MonthYearSetterContext = createContext<null | MonthYearSetterType>(
  null
);

function Calender() {
  const [selectedDate, setSelectedDate] = useState<DatePickerTypes>({
    startDate: null,
    endDate: null,
  });
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const year = today.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState<number>(month);
  const [selectedYear, setSelectedYear] = useState<number>(year);
  const [daysArray, setDaysArray] = useState<Array<number>>([]);
  
  useEffect(() => {
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
          <DatePicker
            daysArray={daysArray}
            currentDate={date}
            isCurrentMonth={selectedMonth === month}
            isCurrentYear={selectedYear === year}
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            isPast={calculateIsPast(selectedMonth, selectedYear)}
          />
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
      </div>
    </Context>
  );
}

export default Calender;
