import React from 'react'

export default function Studentatt() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Student Attendance</h1>
      <p>This is the module to mark student attendance in CapoBrain. Teachers can do so via their portal, and school users can do so as well. When we click on Mark Student Attendance then you have to select a branch, class, and section, then click the load button, it will display the status of the attendance, which you can change to present, absent, or leave.</p>
      <img src="/img/Student-Atendance.png" className='img-fluid' alt="Student-Atendance" />
    </div>
  )
}
