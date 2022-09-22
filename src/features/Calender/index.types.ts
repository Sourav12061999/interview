export type DatePickerTypes = {
  startDate: number | null;
  endDate: number | null;
};

export interface MonthYearSetterType {
  selectedMonth: number;
  setSelectedMonth: (month: number) => void;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

export interface CalenderPropTypes {
  setSelectedDate: (date: DatePickerTypes) => void;
  selectedDate: DatePickerTypes;
}
