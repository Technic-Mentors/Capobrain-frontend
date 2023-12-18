import React from 'react'

export default function Staffcard() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Staff ID Card</h1>
      <p>When you add a teacher, the teacher ID card is generated in the certificate module. It will provide you a list of all teachers who have an ID card, which you may view and print. The ID card will display the Teacher ID, name, and branch name.</p>
      <img src="/img/Staff-Id-Card.png" className='img-fluid' alt="Staff-Id-Card" />
    </div>
  )
}
