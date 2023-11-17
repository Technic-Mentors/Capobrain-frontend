import React from 'react'

export default function Student() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Student Account</h1>
      <p>Students' accounts will be created at the end of the admission process since, in the final stage of the admission form, there is an option to select the fee structure, thus whether the student wishes to pay some amount or not, the account must be created. There are two alternatives in the student account: add payment or refund money. In order to add payment, you must first search for a student by ID. This will load the data for that student, such as transportation, monthly fees, and due amounts, allowing you to submit payment overall or by category. If you only want to contribute transportation or inventory, you can do so. There is also the option of receiving a refund.  All transactions will be recorded in the student account, and the appropriate amount and balances will be displayed. And you can see all of the transactions in the account, and the student can see the account as well.</p>
      <img src="/img/acc2.png" className='img-fluid' alt="" />
    </div>
  )
}
