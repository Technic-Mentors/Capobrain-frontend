import React from "react";

export default function Onlineadmissions() {
  return (
    <div className="container">
      <h1 style={{ color: "#FAC400" }}>Online Admissions</h1>
      <p>
        This module displays a list of all students who applied online in the
        online admission submodule. The online admission submodule can receive
        all admission received over the website. There is a separate website
        module through which every school can develop their own website by
        adding content such as about, gallery, events, and so on. When you see
        the website, there will be an option for admissions, and anyone may
        apply for admission, which will be displayed on the online complain list
        submodule You can simply enter some basic information on the website,
        and when we see the list, there is an edit option; when we click on it,
        the right admission form is displayed, and the student is added to the
        student list.
      </p>
      <img src="/img/Online-Admission.png" className="img-fluid" alt="Online-Admission" />
    </div>
  );
}
