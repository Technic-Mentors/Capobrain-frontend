import React from 'react'

export default function Recieve() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Recieve Fee</h1>
      <p>When you search for a student by ID, you have two alternatives for payment: total payment or payment per category, such as transportation or inventory. If you simply enter the transport payment, it will display in the student account's transport column; but, if we enter the payment in the inventory column, it will appear in the inventory field. During payment, you can also select a payment method (cash, bank transfer, or Easy paisa). And if we enter the total amount in the payable amount area, it will appear in the paid amount in the student account.</p>
      <img src="/img/Recieve-Fee.png" className='img-fluid' alt="Recieve-Fee" />
    </div>
  )
}
