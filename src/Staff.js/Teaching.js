import React from "react";

export default function Teaching() {
  return (
    <div className="container">
      <h1 style={{ color: "#FAC400" }}>Teaching Staff</h1>
      <p>
        In teaching staff, there is a form for teachers to fill out, and there
        is an option to add teacher personal details, academic details, work
        experience and talents, and so on. You must first add Nationality,
        Religion, and Designation to the configuration module. You can enter all
        of the teacher's information step by step, and in the final step, you
        will select which class the teacher has applied for. When we click the
        submit button, it will display the Teacher ID that the teacher will use
        to connect to their portal, which will be unique for all of the
        teachers.
      </p>
      <ul>
        <li>
          First, add Nationality, Religion, and Designation to the configuration
          module.
        </li>
        <li>Image size should be less than or equal to 100 KB.</li>
        <li>
          The file size required in the instructor document area is less than or
          equal to 300 KB.
        </li>
      </ul>
      <img src="/img/Add-Teacher.png" className="img-fluid" alt="Add-Teacher" />
    </div>
  );
}
