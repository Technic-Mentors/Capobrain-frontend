import React from 'react'

export default function Withdrawpay() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Withdraw Amount</h1>
      <p>Because employees can only withdraw the amount, the Withdraw Amount option is only available to them. First, choose the staff by ID, which will load the data in fields such as payable salary, then select the withdraw amount, payment methods, and put the person's name in the paid by field, so that the transaction amount will be deducted from the staff account.</p>
      <img src="/img/Withdraw-Amount.png" className='img-fluid' alt="Withdraw-Amount" />
    </div>
  )
}
