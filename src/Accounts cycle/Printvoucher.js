import React from 'react'

export default function Printvoucher() {
  return (
    <div className='container'>
    <h1 style={{color:"#FAC400"}}>Print Voucher</h1>
    <p>Print vouchers will display certain options that must be selected in order to print the vouchers. After you select the session, it will show you the year based on the selected session, and after you select the year, it will show you a list of all the months. After that, you must select the branch, class, section, and student, and then click the print button. It will print the vouchers based on the options you specify.</p>
      <img src="/img/acccyc4.png" className='img-fluid' alt="" />
    </div>
  )
}
