import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

function SmallCalendar() {

  const [date, setDate] = useState(new Date());


  return (
    <>
    <div>
        <div>
          <Calendar onChange={setDate} value={date}/>
        </div>
        <div >
          <h1 className='font-mono mt-2 text-center'>Today is: <strong>{date.toDateString()}</strong></h1> 
        </div>
    </div>
    </>
  )
}

export default SmallCalendar;