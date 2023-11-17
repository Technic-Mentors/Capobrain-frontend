import React from "react";

export default function Dashboard() {
  return (
    <div className="container">
      <h1 style={{ color: "#FAC400" }}>Dashboard </h1>
      <p>
        After logging in successfully, a dashboard will appear representing all
        the importing highlights regarding the school. We can filter this
        information by choosing the school branch. The dashboard represents the
        overall stats of the student, staff and the school. We can also have a
        look at the user logged-in from the top right corner of the screen, we
        can also change the password and use it Log out. The CapoBrain Dashboard
        has all the useful and necessary information for a system user.
        Following information is listed on our online school management system
        on login:
      </p>
      <ul>
        <li>No of Students / Staff </li>
        <li>Student Account Stats </li>
        <li>Staff Account Stats</li>
        <li>Inventory Stats</li>
        <li>Profit / Loss</li>
        <li>Attendances / Birthdays</li>
      </ul>
      <img
        src="/img/dash.jpg"
        className="img-fluid"
        alt="school management software"
      />
    </div>
  );
}
