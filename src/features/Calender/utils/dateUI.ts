import { DatePickerTypes } from "../index.types";

const today = new Date();
const curr_month = today.getMonth();
const curr_date = today.getDate();
const curr_year = today.getFullYear();
const checkIsDisable = (
  month: number,
  year: number,
  date: number,
  selectedDate: DatePickerTypes
) => {
  let isDisabled = false;
  if (curr_year > year) {
    isDisabled = true;
  } else if (curr_year < year) {
    isDisabled = false;
  }

  if (curr_year === year && curr_month > month) {
    isDisabled = true;
  } else if (curr_year === year && curr_month < month) {
    return false;
  }
  if (curr_year === year && curr_month === month) {
    isDisabled = curr_date > date;
  }
  if (selectedDate.startDate != null && selectedDate.endDate === null) {
    if (selectedDate.startDate.year > year) {
      isDisabled = true;
    } else if (selectedDate.startDate.year < year) {
      isDisabled = false;
    }

    if (
      selectedDate.startDate.year === year &&
      selectedDate.startDate.month > month
    ) {
      isDisabled = true;
    } else if (
      selectedDate.startDate.year === year &&
      selectedDate.startDate.month < month
    ) {
      return false;
    }
    if (
      selectedDate.startDate.year === year &&
      selectedDate.startDate.month === month
    ) {
      isDisabled = selectedDate.startDate.date > date;
    }
  }
  return isDisabled;
};

const checkIsSelected = (
  month: number,
  year: number,
  date: number,
  selectedDate: DatePickerTypes
) => {
  if (
    selectedDate.startDate?.date === date &&
    selectedDate.startDate.month === month &&
    selectedDate.startDate.year === year
  ) {
    return true;
  }

  if (
    selectedDate.endDate?.date === date &&
    selectedDate.endDate.month === month &&
    selectedDate.endDate.year === year
  ) {
    return true;
  }
  if (selectedDate.endDate && selectedDate.startDate) {
    var from = Date.parse(
      `${selectedDate.startDate.month}/${selectedDate.startDate.date}/${selectedDate.startDate.year}`
    );
    var to = Date.parse(
      `${selectedDate.endDate.month}/${selectedDate.endDate.date}/${selectedDate.endDate.year}`
    );
    var check = Date.parse(`${month}/${date}/${year}`);
    if (check > from && check < to) {
      return true;
    }
  }
  return false;
};
export { checkIsDisable, checkIsSelected };
