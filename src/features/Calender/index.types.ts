export type DatePickerTypes = {
    startDate:number | null;
    endDate :number | null;
}

export interface  CalenderPropTypes {
    setSelectedDate: (date:DatePickerTypes) => void;
    selectedDate:DatePickerTypes;
}