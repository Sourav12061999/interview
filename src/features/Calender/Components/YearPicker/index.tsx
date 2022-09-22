import React,{useContext} from 'react';
import { MonthYearSetterContext } from '../..';
import styles from "./Year.module.css";
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from "react-icons/io";
function YearPicker() {
    const  MonthYearSetter= useContext(MonthYearSetterContext);
    const selectedYear = MonthYearSetter?.selectedYear;
    const setSelectedYear = MonthYearSetter?.setSelectedYear;

    const handleChangeYear = (task:"increment"| "decrement") =>{
        if(setSelectedYear && selectedYear){
            if(task==="increment"){
                setSelectedYear(selectedYear+1);
            }else if(task === "decrement"){
                setSelectedYear(selectedYear-1);
            }
        }
    }
  return (
    <div className={styles.yearPicker}>
        <div onClick={() => handleChangeYear("decrement")}>
            <IoIosArrowDropleftCircle fontSize={"2.5rem"}/>
        </div>
        <h1>{selectedYear}</h1>
        <div onClick={() => handleChangeYear("increment")}>
            <IoIosArrowDroprightCircle fontSize={"2.5rem"}/>
        </div>
    </div>
  )
}

export default YearPicker