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
    // Whenever my selected date || selectedMonth || selectedYear changes I want to see if my current date is disabled or selected or not
    if (selectedMonth != undefined && selectedYear != undefined) {
      setIsDisabled(
        checkIsDisable(selectedMonth, selectedYear, day, selectedDate)
      );
      setIsSelected(
        checkIsSelected(selectedMonth, selectedYear, day, selectedDate)
      );
    }
  }, [selectedDate, selectedMonth, selectedYear]);

  let dateClassName = `${isCurrentDate && styles.current} ${styles.date} ${
    isDisabled && styles.disabled
  } ${isSelected && styles.selected}`; // This is the classes that are going to be added on the date div

  const handleClick = () => {
    if (
      isDisabled ||
      selectedMonth === undefined ||
      selectedYear === undefined
    ) {
      // If the the compoennt is disabled || (selectedMonth || seelctedYear) is undefined do nothing
      return;
    }
    if (selectedDate.startDate === null) {
      // If the start date is null the set the start date as the date where clicked
      setSelectedDate({
        ...selectedDate,
        startDate: {
          date: day,
          month: selectedMonth,
          year: selectedYear,
        },
      });
    } else if (
      // If start date is not null but endDate is null(Means second click) -> set the endDate as the date where clicked
      selectedDate.startDate != null &&
      selectedDate.endDate === null
    ) {
      setSelectedDate({
        ...selectedDate,
        endDate: {
          date: day,
          month: selectedMonth,
          year: selectedYear,
        },
      });
    } else if (selectedDate.startDate != null && selectedDate.endDate != null) {
      // If both start date and end date are not null then(Means third Click) -> Reset the previous values and set the start date as the date where clicked
      setSelectedDate({
        endDate: null,
        startDate: {
          date: day,
          month: selectedMonth,
          year: selectedYear,
        },
      });
    }
  };

  return (
    <div
      className={dateClassName}
      onClick={() => {
        handleClick();
      }}
    >
      <h3>{day}</h3>
    </div>
  );
}

export default Dates;
