import React from 'react'
import styles from "./sidebar.module.css";
import MonthPicker from '../MonthPicker';
import YearPicker from '../YearPicker';
function Sidebar() {
  return (
    <div className={styles.monthPicker}>
      {/* this is the component for setting the year  */}
      <YearPicker/> 
      {/* this is the component for setting the month  */}
      <MonthPicker/>
    </div>
  )
}

export default Sidebar