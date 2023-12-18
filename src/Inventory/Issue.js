import React from 'react'

export default function Issue() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Issue Inventory</h1>
      <p>When it comes to inventory, there are two options: provide it to students or give it to staff. When issuing inventory to a student, you must first search for the student by ID. All of the data will be loaded automatically in the fields, and then you must select the inventory to be sent to that student. The transaction will be added to the student account, and invoices will be displayed in the invoice list. You can define whether inventory is chargeable or non-chargeable when you deliver it to a teacher. If we choose non-inventory, the transaction will never be recorded; if we choose charged, the correct price will be presented or the transaction will be recorded in the teacher's account.</p>
      <img src="/img/Issue-Inventory.png" className='img-fluid mt-5' alt="Issue-Inventory" />
    </div>
  )
}
