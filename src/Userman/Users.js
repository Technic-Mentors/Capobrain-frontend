import React from 'react'

export default function Users() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Users</h1>
      <p>Before adding any users, the roles must first be created. Because when adding a user, you may choose their role. Your user name, father name, CNIC, phone number, email address, role, and photo can all be found here. For instance, you must first add the role of branch user before providing the user's details if you want to add a branch user. An email address and password are needed to log in. As a result, you can quickly determine which user plays which role. </p>
      <img src="/img/Add-User.png" className='img-fluid' alt="Add-User" />
    </div>
  )
}
