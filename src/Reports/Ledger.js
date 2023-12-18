import React from 'react'

export default function Ledger() {
  return (
    <div className='container'>
    <h1 style={{color:"#FAC400"}}>General Ledger</h1>
    <p>The General Ledger Report summarizes every transaction that enters and exits your accounts on an accrual basis. When you issue invoices, track expenses, or receive payments, these transactions are generated. It is essentially a master of all your company's accounts and is mostly used to track your company's financial activity. You may see the date, party, kind, cash in and out, opening balance, and overall balance in the general ledger report.</p>
    <img src="/img/General-Ledger.png" className='img-fluid' alt="General-Ledger" />
  </div>
  )
}
