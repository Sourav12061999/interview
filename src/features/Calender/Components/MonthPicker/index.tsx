import React, { useContext } from "react";
import { MonthYearSetterContext } from "../..";
import MonthData from "../../calender.data";
import styles from "./month.module.css";
function MonthPicker() {
  const MonthYearSetter = useContext(MonthYearSetterContext);
  const selectedMonth = MonthYearSetter?.selectedMonth;
  const setSelectedMonth = MonthYearSetter?.setSelectedMonth;
  return (
    <div className={styles.month}>
      {/* I am maping over the month data and show them  */}
      {MonthData.map((el, index) => (
        <div
          data-activemonth={selectedMonth === index ? "true" : "false"} // this data attribute is used to style the current seelcted month
          onClick={() => {
            if (!setSelectedMonth) return;
            setSelectedMonth(index);
          }}
          key={el.name}
        >
          {el.shortName}
        </div>
      ))}
    </div>
  );
}

export default MonthPicker;
