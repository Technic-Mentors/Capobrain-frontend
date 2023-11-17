import React from 'react'

export default function Admission() {
  return (
    <div className='container'>
<h1 style={{color:"#FAC400"}}>New Admission</h1>
<p>There is a form for student admission and there is an option to enter personal details, family details, guardian details and so on. First of all you have to add fee structure, classes and section in the configuration module than you can input all of the student details step by step, and in the last step, you will select which class the student wants to admission in and there is also an option fee structure type like you want to add fee structure monthly or annually, and when we click the submit button, it will display you the student ID that the student will use to connect to their portal, and this will be unique for all of the students.
</p>
<ul>
  <li>
First, Fee Structure, classes, and section to the configuration module.</li>
  <li>
Format! Image Format Must Be JPG, JPEG or PNG.</li>
  <li>
Image size should be less than or equal to 100 KB.</li>
  <li>
Document Format! Image Format Must Be JPG, JPEG, PDF or PNG.</li>
  <li>
The file size required in the instructor document area is less than or equal to 300 KB.</li>
</ul>
     <img src="/img/student1.png" className='img-fluid' alt="" />  
    </div>
  )
}
