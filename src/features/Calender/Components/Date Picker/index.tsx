import React, { useState, Fragment, useEffect } from "react";
import Dates from "../Dates";
import { CalenderPropTypes } from "../../index.types";
import styles from "./datePicker.module.css";

interface PropTypes extends CalenderPropTypes {
  daysArray: Array<number>;
  currentDate: number;
  isCurrentMonth: boolean;
  isCurrentYear: boolean;
  isPast: boolean;
}
function Calender({
  setSelectedDate,
  selectedDate,
  daysArray,
  isCurrentMonth,
  isCurrentYear,
  currentDate,
  isPast,
}: PropTypes) {
  console.log(selectedDate);
  return (
    <div className={styles.calender}>
      {daysArray.map((date) => {
        let isCurrentDate: boolean = false;
        if (isCurrentMonth && isCurrentYear) {
          isCurrentDate = date === currentDate;
        }
        return (
          <Fragment key={date}>
            <Dates
              isCurrentDate={isCurrentDate}
              day={date}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </Fragment>
        );
      })}
    </div>
  );
}

export default Calender;
