import React, { useState, useEffect } from "react";
import DatePicker from "./Components/Date Picker";
import { DatePickerTypes } from "./index.types";
import styles from "./styles.module.css";
import Sidebar from "./Components/MonthPicker";

function Calender() {
  const [selectedDate, setSelectedDate] = useState<DatePickerTypes>({
    startDate: null,
    endDate: null,
  });
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const year = today.getFullYear();
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [selectedMonth, setSelectedMonth] = useState<number>(month);
  const [selectedYear, setSelectedYear] = useState<number>(year);
  const [daysArray, setDaysArray] = useState<Array<number>>([]);
  useEffect(() => {
    const days: Array<number> = [];
    for (let i = 1; i <= daysInMonth[month]; i++) {
      days.push(i);
    }
    setDaysArray(days);
  }, []);
  return (
    <div className={styles.datePicker}>
      <div className={styles.calender}>
        <DatePicker
          daysArray={daysArray}
          currentDate={date}
          isCurrentMonth={selectedMonth === month}
          isCurrentYear={selectedYear === year}
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </div>
      <div className={styles.monthPicker}>
        <Sidebar />
      </div>
    </div>
  );
}

export default Calender;
