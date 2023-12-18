import React from 'react'

export default function Invoice() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Invoices List</h1>
      <p>It will display a list of all invoices of issue inventory in the invoices list, as well as an action column that displays the invoice when we click on the view button, and it will display the appropriate invoice for that transaction. On the invoice, you may see the customer information, inventory information, and payment information. You can also print that invoice.</p>
      <img src="/img/Invoice-List.png" className='img-fluid mt-5' alt="Invoice-List" />
    </div>
  )
}
