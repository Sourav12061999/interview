import React, { ReactNode, Context } from "react";
import { MonthYearSetterType } from "../../index.types";
interface PropTypes {
  children: ReactNode;
  MonthYearSetter: MonthYearSetterType;
  MonthYearSetterContext: Context<MonthYearSetterType | null>;
}
function ContextComponent({
  children,
  MonthYearSetter,
  MonthYearSetterContext,
}: PropTypes) {
  return (
    <MonthYearSetterContext.Provider value={MonthYearSetter}>
      {children}
    </MonthYearSetterContext.Provider>
  );
}

export default ContextComponent;
