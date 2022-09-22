import { DatePickerTypes } from "../index.types";
const checkIsDisable = (
  month: number,
  year: number,
  date: number,
  selectedDate: DatePickerTypes
) => {
  let isDisabled = false;
  const today = new Date();
  const curr_month = today.getMonth();
  const curr_date = today.getDate();
  const curr_year = today.getFullYear();
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
  if (selectedDate.startDate != null) {
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
export default checkIsDisable;
