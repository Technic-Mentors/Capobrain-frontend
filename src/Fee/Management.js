import React from 'react'

export default function Management() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Fine Management</h1>
      <p>If you want to apply a fine to a specific student, first search for the student, then enter the fine amount or cause for the fine, and finally save it. The student must pay the fine, and the amount will be indicated in the student account that the school has applied the fine to you.</p>
      <img src="/img/Fine-Management.png" className='img-fluid' alt="Fine-Management" />
    </div>
  )
}
