import React from "react";

export default function Visitors() {
  return (
    <div className="container">
      <h1 style={{ color: "#FAC400" }}>Visitors Meeting</h1>
      <p>
        In the visitors meeting module, there are two options: meeting with
        staff or meeting with students. First and foremost, you can see that we
        need staff or students to add the meeting, so you must first add staff
        from the Teaching Staff module and students from the New Admission
        module because to add the meeting detail, you must search the staff or
        student through ID, and that ID you will receive when you add teacher or
        student it will show you the ID that you will use in visitors meeting to
        search the student. You must fill out the meeting information. First,
        add the meeting purpose via the configure front office submodule, and
        then fill out all of the mandatory fields for visitors meetings. Red
        star sign with field’s names are mandatory fields that must be filled
        out and non-mandatory fields are option. If you do not fill out any
        mandatory entries, you will receive an alert. For example, in the
        visitors meeting module, the student name and meeting purpose fields are
        mandatory. You must go through the same procedure when meeting with
        staff.
      </p>

      <ul>
        <li>Add a Teacher or Student First</li>
        <li>
          Configure the meeting purpose from the configure front office
          submodule
        </li>
        <li>Fill up all mandatory fields</li>
        <li>Non-mandatory fields are optional and can be skipped</li>
      </ul>

      <img src="/img/Add-Visitors-Meeting.jpg" className="img-fluid" alt="Add-Visitors-Meeting" />
    </div>
  );
}
