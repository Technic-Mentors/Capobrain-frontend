import React from 'react'

export default function Notice() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Notice</h1>
      <p>The announcement module contains two submodules: news and notices. In the notices submodule, you can add any notice for everyone. You will enter the notice title, link, date, added by, and description and save it; this notice will be displayed to everyone on their portal. Any notice can be seen, updated, or deleted at any moment.  </p>
      <img src="/img/ann2.png" className='img-fluid' alt="" />
    </div>
  )
}
