import React, { useState, Fragment, useEffect } from "react";
import Dates from "../Dates";
import { DatePickerTypes } from "../../index.types";
import { CalenderPropTypes } from "../../index.types";
function Calender({setSelectedDate,selectedDate}:CalenderPropTypes) {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [daysArray, setDaysArray] = useState<Array<number>>([]);
  useEffect(() => {
    const days: Array<number> = [];
    for (let i = 1; i <= daysInMonth[month]; i++) {
      days.push(i);
    }
    setDaysArray(days);
  }, []);

  return (
    <div>
      {daysArray.map((element) => (
        <Fragment key={element}>
          <Dates
            isCurrentDate={element === date}
            isDisabled={element<date}
            day={element}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </Fragment>
      ))}
    </div>
  );
}

export default Calender;
