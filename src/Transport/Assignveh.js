import React from 'react'

export default function Assignveh() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Assign Vehicle</h1>
      <p>This module determines which car is assigned to which student and what route is taken, so it works. You will first search the student by ID, which will load the data of that student, then you will select the vehicle that you will assign to that student, then you will select the route, and the most important thing is that you must add pick up and drop off times, and then you will add the transport charges for that student with an effective date, and the transport charges will work according to that date.</p>
      <img src="/img/trans3.png" className='img-fluid' alt="" />
    </div>
  )
}
