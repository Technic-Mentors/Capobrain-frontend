import React from 'react'

export default function Issuevooks() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Issue Books</h1>
      <p>This module is for issue book to the students. You must first search for the student using their ID, after which you may choose the book you want to issue and the data for that book will instantly load. More than one quantity can be added before choosing the issue or return date. You will be given a detailed list of all the issue books. It has an impact on the number of books as well. There is also the option to "return the book," where you can choose the branch, student, or book name, after which the data for the book will load and you can then enter the information.</p>
      <img src="/img/Issue-Library-Book.jpg" className='img-fluid' alt="Issue-Library-Book" />
    </div>
  )
}
