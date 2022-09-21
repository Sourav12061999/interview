import React from "react";
import styles from "./dates.module.css";
import { CalenderPropTypes } from "../../index.types";
interface PropTypes extends CalenderPropTypes {
  day: number;
  isDisabled: boolean;
  isCurrentDate: boolean;
}
function Dates({
  day,
  isDisabled,
  isCurrentDate,
  selectedDate,
  setSelectedDate,
}: PropTypes) {
  console.log(selectedDate);

  return (
    <div
      className={`${isCurrentDate && styles.blue} ${
        isDisabled && styles.gray
      } ${
        selectedDate.startDate && selectedDate.startDate >= day && styles.gray
      }`}
      onClick={() => {
        if (!isDisabled) {
          if (selectedDate.startDate === null) {
            setSelectedDate({ ...selectedDate, startDate: day });
          } else {
            setSelectedDate({ ...selectedDate, endDate: day });
          }
        }
      }}
    >
      {day}
    </div>
  );
}

export default Dates;
