import React, { useState } from "react";
import StartDate from "./Components/Start";
import EndDate from "./Components/End";
import Calender from "./Components/Calender";
import { DatePickerTypes } from "./index.types";
function DatePicker() {
  const [selectedDate, setSelectedDate] = useState<DatePickerTypes>({
    startDate: null,
    endDate: null,
  });
  return (
    <div>
      <Calender setSelectedDate={setSelectedDate} selectedDate={selectedDate} />
    </div>
  );
}

export default DatePicker;
