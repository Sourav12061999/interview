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
  return (
    <div className={styles.calender}>
      {daysArray.map((date) => {
        let isCurrentDate: boolean = false;
        let isDisabled:boolean = false;
        if (isCurrentMonth && isCurrentYear) {
          isCurrentDate = date === currentDate;
        }
        if(isPast){
          isDisabled=true;
        }else if(isCurrentMonth && isCurrentYear){
          isDisabled = date < currentDate;
        }else{
          isDisabled = false;
        }
        return (
          <Fragment key={date}>
            <Dates
              isCurrentDate={isCurrentDate}
              isDisabled={isDisabled}
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
