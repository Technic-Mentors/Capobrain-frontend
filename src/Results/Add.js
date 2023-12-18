import React from 'react'

export default function Add() {
  return (
    <div className='container'>
      <h1 style={{color:"#FAC400"}}>Add Result</h1>
      <p>You will add the result of any class in this module. You will first select the branch, exam type, class, and section, and then click the load button, which will load all of the subjects in that class. You will then enter the marks for each subject one by one, and then save the result, which will display the record in the relevant result card in the result list.</p>
      <img src="/img/Add-Result.png" className='img-fluid' alt="Add-Result" />
    </div>
  )
}
