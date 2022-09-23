import React, { useContext } from "react";
import { MonthYearSetterContext } from "../..";
import styles from "./Year.module.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
function YearPicker() {
  const MonthYearSetter = useContext(MonthYearSetterContext);
  const selectedYear = MonthYearSetter?.selectedYear;
  const setSelectedYear = MonthYearSetter?.setSelectedYear;
  const setSelectedMonth = MonthYearSetter?.setSelectedMonth;

  // This function is for changig the selected year
  const handleChangeYear = (task: "increment" | "decrement") => {
    if (setSelectedYear && selectedYear && setSelectedMonth) {
      if (task === "increment") {
        // Increament the selectedYear
        setSelectedYear(selectedYear + 1);
      } else if (task === "decrement") {
        // Decement the selectedYear
        setSelectedYear(selectedYear - 1);
      }
      // When ever I change the selected Month set the selected moth to 0
      setSelectedMonth(0);
    }
  };
  return (
    <div className={styles.yearPicker}>
      <div onClick={() => handleChangeYear("decrement")}>
        <IoIosArrowDropleftCircle fontSize={"2.5rem"} />
      </div>
      <h1>{selectedYear}</h1>
      <div onClick={() => handleChangeYear("increment")}>
        <IoIosArrowDroprightCircle fontSize={"2.5rem"} />
      </div>
    </div>
  );
}

export default YearPicker;
