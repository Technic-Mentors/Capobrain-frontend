import React from 'react'

export default function Studentcard() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Student ID Card</h1>
      <p>When a student gets admitted to school, his or her student ID card is generated in the certificate module. It will display a list of all students who have an ID card, allowing you to view and print the ID card. The ID card will have your student ID, name, father's name, class, section, and branch name. </p>
      <img src="/img/Student-Id-Card.png" className='img-fluid' alt="Student-Id-Card" />
    </div>
  )
}
