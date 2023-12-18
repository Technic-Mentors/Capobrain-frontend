import React from "react";

export default function Promote() {
  return (
    <div className="container">
      <h1 style={{ color: "#FAC400" }}>Promote Students</h1>
      <p>
        There are two options for student promotion: single student promotion
        and promoting students as a full class. So, if you want to promote a
        single student to the next class, use the single student promotion
        option. You can search for a student by ID and then select the class and
        section to which the student will be promoted.
      </p>
      <ul>
        <li>First add classes, and section to the configuration module.</li>
        <li>Select single student promotion and promote students</li>
      </ul>
      <img src="/img/Promote-Student.png" className="img-fluid" alt="Promote-Student" />
    </div>
  );
}
