import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CalendarPicker } from '@mui/lab';


const MyCalender = (props) => {
    const [value] = React.useState(props.timdD);
    const [date] = React.useState(new Date());
    console.log(value,date)

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker   openTo="day" shouldDisableDate={isWeekend} date={props.timeD} onChange={props.handleChange} />
        </LocalizationProvider>
    );
};

export default MyCalender;