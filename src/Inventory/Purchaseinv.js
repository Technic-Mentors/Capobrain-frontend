import React from 'react'

export default function Purchaseinv() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Purchase Inventory</h1>
      <p>You will purchase inventory from a supplier in this module, but first we must add the supplier from the supplier page. When you first select the inventory, it will automatically load the quantity, cost price, or sale price. When you click the submit button, the product will be added to the grid, and when you click the checkout button, the purchase invoice and all purchase amount data will be shown in the supplier account.</p>
      <img src="/img/inven2.png" className='img-fluid mt-5' alt="" />
    </div>
  )
}
