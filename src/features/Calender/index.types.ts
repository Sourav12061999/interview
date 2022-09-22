export type DateType = {
  date:number;
  month:number;
  year:number
}
export type DatePickerTypes = {
  startDate: DateType | null;
  endDate: DateType | null;
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
