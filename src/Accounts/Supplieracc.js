import React from 'react'

export default function Supplieracc() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Supplier Account</h1>
      <p>We require suppliers to purchase inventory, thus the supplier account displays all transactions that we will purchase from them, including the payable amount, your paid amount, and the leftover balance with relevant supplier data. Except that the supplier has the ability to add payment at any time, and the account will be updated based on that information.</p>
      <img src="/img/Supplier-Account-Detail.png" className='img-fluid' alt="Supplier-Account-Detail" />
      <img src="/img/Add-Supplire-Payment.png" className='img-fluid mt-3' alt="Add-Supplire-Payment" />
    </div>
  )
}
