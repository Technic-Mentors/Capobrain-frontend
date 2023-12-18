import React from 'react'

export default function Supplier() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Supplier</h1>
      <p>In the Supplier module, we will add all of the school suppliers from whom we purchase inventory. There is a form in which you will enter the supplier's name, cell number, CNIC, and address, and it will show you a list of all the suppliers, and you can view that information or change anything in the information using the update button.</p>
      <img src="/img/Add-Supplier.png" className='img-fluid mt-5' alt="Add-Supplier" />
    </div>
  )
}
