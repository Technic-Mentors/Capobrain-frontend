import React from 'react'

export default function Message() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Messages</h1>
      <p>You can send messages to everyone in this module, including students, teachers, and parents. Therefore, in the message module, you will first select the message subject, message, and date. Then, you have the option of selecting the recipient of the message. If you select everyone, then the message will be sent to everyone who uses this system. If, however, you only want to send it to a specific individual, such as a teacher or student of a particular class, then you can also select that option. It will provide a list so you can quickly see which message was delivered when and to whom.</p>
      <img src="/img/comuni1.png" className='img-fluid' alt="" />
    </div>
  )
}
