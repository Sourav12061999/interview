import React, { useContext, useEffect, useState } from "react";
import styles from "./dates.module.css";
import { CalenderPropTypes } from "../../index.types";
import { MonthYearSetterContext } from "../../index";
import { checkIsDisable, checkIsSelected } from "../../utils/dateUI";
interface PropTypes extends CalenderPropTypes {
  day: number;
  isCurrentDate: boolean;
}
function Dates({
  day,
  isCurrentDate,
  selectedDate,
  setSelectedDate,
}: PropTypes) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const MonthYearSetter = useContext(MonthYearSetterContext);
  const selectedMonth = MonthYearSetter?.selectedMonth;
  const selectedYear = MonthYearSetter?.selectedYear;

  useEffect(() => {
    if (selectedMonth != undefined && selectedYear != undefined) {
      setIsDisabled(
        checkIsDisable(selectedMonth, selectedYear, day, selectedDate)
      );
      setIsSelected(
        checkIsSelected(selectedMonth, selectedYear, day, selectedDate)
      );
    }
  }, [selectedDate, selectedMonth, selectedYear]);

  return (
    <div
      className={`${isCurrentDate && styles.current} ${styles.date} ${
        isDisabled && styles.disabled
      } ${isSelected && styles.selected}`}
      onClick={() => {
        if (
          isDisabled ||
          selectedMonth === undefined ||
          selectedYear === undefined
        ) {
          return;
        }
        if (selectedDate.startDate === null) {
          setSelectedDate({
            ...selectedDate,
            startDate: {
              date: day,
              month: selectedMonth,
              year: selectedYear,
            },
          });
        } else {
          setSelectedDate({
            ...selectedDate,
            endDate: {
              date: day,
              month: selectedMonth,
              year: selectedYear,
            },
          });
        }
      }}
    >
      <h3>{day}</h3>
    </div>
  );
}

export default Dates;
