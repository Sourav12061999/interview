const calculateIsPast = (selectedMonth:number,selectedYear:number) =>{
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    if(currentYear === selectedYear){
        return selectedMonth<currentMonth;
    }else{
        return selectedYear < currentYear;
    }

}
export default calculateIsPast;