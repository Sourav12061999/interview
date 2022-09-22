import React from 'react'
import styles from "./sidebar.module.css";
import MonthPicker from '../MonthPicker';
import YearPicker from '../YearPicker';
function Sidebar() {
  return (
    <div className={styles.monthPicker}>
      <YearPicker/>
      <MonthPicker/>
    </div>
  )
}

export default Sidebar