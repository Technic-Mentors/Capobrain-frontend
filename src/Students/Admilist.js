import React from "react";

export default function Admilist() {
  return (
    <div className="container">
      <h1 style={{ color: "#FAC400" }}>Student List</h1>
      <p>
        In student list, it will show all the student list you can view the
        documents, login details or you can also change anything in the form or
        you can also delete any form.
      </p>
      <ul>
        <li>Format! Image Format Must Be JPG, JPEG or PNG.</li>
        <li>Image size should be less than or equal to 100 KB.</li>
        <li>Document Format! Image Format Must Be JPG, JPEG, PDF or PNG.</li>
        <li>
          The file size required in the instructor document area is less than or
          equal to 300 KB.
        </li>
      </ul>
      <img src="/img/student2.png" className="img-fluid" alt="" />
    </div>
  );
}
