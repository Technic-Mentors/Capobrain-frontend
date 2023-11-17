
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faCaretDown,
  faHouse,
  faChalkboardTeacher,
  faUserGraduate,
  faClipboardList,
  faMoneyBill,
  faCalculator,
  faClipboard,
  faCertificate,
  faGraduationCap,
  faBus,
  faMoneyBillAlt,
  faChartBar,
  faChartPie,
  faBullhorn,
  faComments,
  faSoccerBall,
  faUsers,
  faCog,
  faAddressBook,
  faBook,
  faClipboardUser,
  faPaperclip,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleVisibility = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    // Add a resize event listener to handle changes in screen size
    window.addEventListener("resize", handleVisibility);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);

  // Function to toggle the navbar open/close state
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const closeNavbar = () => {
    if (isNavbarOpen && isSmallScreen) {
      setIsNavbarOpen(false);
    }
  };

  const [activeSection, setActiveSection] = useState(null);

  const handleSectionToggle = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };

  const renderSection = (sectionId, sectionTitle, links) => {
    return (
      <div className="text-white" key={sectionId}>
        <button
          className="btn w-100 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${sectionId}`}
          aria-expanded={activeSection === sectionId ? "true" : "false"}
          onClick={() => handleSectionToggle(sectionId)}
        >
          <div className="d-flex justify-content-between">
            <div className="text-start">{sectionTitle}</div>
            <div>
              <FontAwesomeIcon className="text-white" icon={faCaretDown} />
            </div>
          </div>
        </button>

        <div
          className={`collapse ${activeSection === sectionId ? "show" : ""}`}
          id={sectionId}
        >
          <div>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-white"
                    to={link.to}
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => closeNavbar(link.to)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  const sections = [
    {
id: "reception",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faHouse} /> <span /> Reception
  </div>
),
links: [
{
  to: "visitor",
  label: "Visitors Meeting"
},
{
  to: "pcall",
  label: "Phone Call Log"
},
{
  to: "dispatch",
  label: "Postal Dispatch"
},
{
  to: "precieve",
  label: "Postal Recieve"
},
{
  to: "complains",
  label: "Online Complains List"
},
{
  to: "frontoffice",
  label: "Configure Front Office"
},
]
    },
    {
id: "staff",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faChalkboardTeacher} /> <span /> Staff
  </div>
),
links: [
{
  to: "teaching",
  label: "Teaching Staff"
},
{
  to: "tstaff",
  label: "Non Teaching Staff"
},
{
  to: "stodos",
  label: "Staff Todo's"
},
{
  to: "swithdraw",
  label: "Staff Withdraw"
},
{
  to: "sreview",
  label: "Staff Review"
},
{
  to: "fedlist",
  label: "Feedback List"
},
]
    },
    {
id: "students",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faUserGraduate} /> <span /> Students
  </div>
),
links: [
{
  to: "newadd",
  label: "New Admission"
},
{
  to: "alist",
  label: "Students List"
},
{
  to: "onlineadd",
  label: "Online Admissions"
},
{
  to: "frecord",
  label: "Family Record"
},
{
  to: "prostudents",
  label: "Promote Students"
},
{
  to: "withstudents",
  label: "Withdraw Students"
},
{
  to: "passstudents",
  label: "Passout Students"
},
{
  to: "studentreview",
  label: "Students Review"
},
{
  to: "feedbackrecord",
  label: "Feedback Record"
},
]
    },
    {
id: "attendance",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faClipboardUser} /> <span /> Attendance
  </div>
),
links: [
{
  to: "sattendence",
  label: "Student Attendance"
},
{
  to: "staffatt",
  label: "Staff Attendance"
},
{
  to: "leave",
  label: "Leave Request"
}
]
    },
    {
id: "inventory",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faClipboardList} /> <span /> Inventory
  </div>
),
links: [
{
  to: "inventory",
  label: "Inventory"
},
{
  to: "purchseinven",
  label: "Purchase Inventory"
},
{
  to: "purchaseli",
  label: "Purchase List"
},
{
  to: "issue",
  label: "Issue Invetory"
},
{
  to: "invoiceli",
  label: "Invoice List"
},
{
  to: "supplier",
  label: "Supplier"
},
]
    },
    {
id: "fee",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faMoneyBill} /> <span /> Fee
  </div>
),
links: [
{
  to: "recievefee",
  label: "Recieve Fee"
},
{
  to: "refundpay",
  label: "Refund Payment"
},
{
  to: "updatefee",
  label: "Update Fee"
},
{
  to: "updatefeeli",
  label: "Update Fee List"
},
{
  to: "scholorship",
  label: "Scholarship"
},
{
  to: "management",
  label: "Fine Management"
},
{
  to: "discounts",
  label: "Discounts"
},
{
  to: "staccadj",
  label: "Student Account Adjust"
},
{
  to: "feecommitli",
  label: "Fee Comitment List"
},
{
  to: "defaultstu",
  label: "Default Students"
},
]
    },
    {
id: "cycle",
title: (
  <div className="text-start">
    <FontAwesomeIcon icon={faCalculator} /> <span /> Account Cycle
  </div>
),
links: [
{
  to: "calender1",
  label: "Calender"
},
{
  to: "salarycycle",
  label: "Salary Cycle"
},
{
  to: "generatevouch",
  label: "Generate Vouchers"
},
{
  to: "printvouch",
  label: "Print Vouchers"
}
]
    },
    {
id: "accounts",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faCalculator} /> <span /> Accounts
  </div>
),
links: [
{
  to: "withdrawamo",
  label: "Withdraw Amount"
},
{
  to: "student",
  label: "Students Account"
},
{
  to: "staff",
  label: "Staff Account"
},
{
  to: "supplieracc",
  label: "Supplier Account"
},
{
  to: "familywise",
  label: "Family Wise Account"
},
{
  to: "salarydeduct",
  label: "Salary Deduction"
},
]
    },
    {
id: "exam",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faCalculator} /> <span /> Exams
  </div>
),
links: [
{
  to: "configexams",
  label: "Configure Exams"
},
{
  to: "configpapers",
  label: "Configure Papers"
},
{
  to: "datesheet",
  label: "Date Sheet"
}
]
    },
    {
id: "result",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faClipboard} /> <span /> Result
  </div>
),
links: [
{
  to: "addresult",
  label: "Add Result"
},
{
  to: "subjectwise",
  label: "Subject Wise Result"
},
{
  to: "resultlist",
  label: "Result List"
}
]
    },
    {
id: "certificate",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faCertificate} /> <span /> Certificate
  </div>
),
links: [
{
  to: "configcert",
  label: "Configure Certificate"
},
{
  to: "studntcerti",
  label: "Student Certificate"
},
{
  to: "staffcerti",
  label: "Staff Certificate"
},
{
  to: "studentcard",
  label: "Student ID Card"
},
{
  to: "staffcard",
  label: "Staff ID Card"
},
]
    },
    {
id: "academics",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faGraduationCap} /> <span /> Academics
  </div>
),
links: [
{
  to: "lesson",
  label: "Lesson Planning"
},
{
  to: "homework",
  label: "Home Work"
},
{
  to: "uploadmat",
  label: "Upload Material"
},
{
  to: "summerwork",
  label: "Summer Home Work"
},
{
  to: "homeworkmar",
  label: "Home Work Marking"
},
{
  to: "homeworkmarli",
  label: "Home Work Marking List"
},
{
  to: "classtimetable",
  label: "Class Time Table"
},
]
    },
    {
id: "lms",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faUserGraduate} /> <span /> LMS
  </div>
),
links: [
{
  to: "lecture",
  label: "Lecture"
},
{
  to: "courses",
  label: "Courses"
},
{
  to: "coursecat",
  label: "Course Category"
}
]
    },
    {
id: "transport",
title: (
  <div className="text-start">
  <FontAwesomeIcon icon={faBus} /> <span /> Transport
  </div>
),
links: [
{
  to: "routes",
  label: "Routes"
},
{
  to: "vehicle",
  label: "Vehicles"
},
{
  to: "assignveh",
  label: "Assign Vehicles"
}
]
    },
    {
      id: "expenses",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faMoneyBillAlt} /> <span /> Expenses
        </div>
      ),
      links: [
        {
          to: "addexpense",
          label: "Add Expense",
        },
        {
          to: "manageexpense",
          label: "Manage Expense",
        },
        {
          to: "expencecat",
          label: "Expense Category",
        },
      ],
    },
    {
      id: "fixedassets",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faChartBar} /> <span /> Fixed Assets
        </div>
      ),
      links: [
        {
          to: "assettype",
          label: "Asset Type",
        },
        {
          to: "assets",
          label: "Assets",
        },
      ],
    },
    {
      id: "announcement",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faBullhorn} /> <span /> Announcement
        </div>
      ),
      links: [
        {
          to: "news",
          label: "News",
        },
        {
          to: "notice",
          label: "Notice",
        },
      ],
    },
    {
      id: "communication",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faComments} /> <span /> Communication
        </div>
      ),
      links: [
        {
          to: "message",
          label: "Messages",
        },
        {
          to: "chat",
          label: "Chat",
        },
      ],
    },
    {
      id: "admission",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faAddressBook} /> <span /> Admission Test
        </div>
      ),
      links: [
        {
          to: "questionbank",
          label: "Question Bank",
        },
        {
          to: "classwiseques",
          label: "Class Wise Question",
        },
      ],
    },
    {
      id: "managesports",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faSoccerBall} /> <span /> Manage Sports
        </div>
      ),
      links: [
        {
          to: "typesp",
          label: "Sports Type",
        },
        {
          to: "sportsdeta",
          label: "Sports Detail",
        },
      ],
    },
    {
      id: "usermanagement",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faUsers} /> <span /> User Management
        </div>
      ),
      links: [
        {
          to: "usersmanage",
          label: "Users",
        },
        {
          to: "rolesmanage",
          label: "Roles",
        },
      ],
    },
    {
      id: "Library",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faBook} /> <span /> Library
        </div>
      ),
      links: [
        {
          to: "librarybook",
          label: "Library Books",
        },
        {
          to: "issuebook",
          label: "Issue Books",
        },
      ],
    },
    {
      id: "Generator",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faPaperclip} /> <span /> Paper Generator
        </div>
      ),
      links: [
        {
          to: "configchap",
          label: "Configure Chapter",
        },
        {
          to: "configtopic",
          label: "Configure Topic",
        },
        {
          to: "configques",
          label: "Configure Qusetion",
        },
        {
          to: "papergene",
          label: "Paper Generate",
        },
      ],
    },
    {
      id: "Website",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faSitemap} /> <span /> Website
        </div>
      ),
      links: [
        {
          to: "events",
          label: "Events",
        },
        {
          to: "viewsite",
          label: "Visit Website",
        },
        {
          to: "home",
          label: "Home",
        },
        {
          to: "aboutus",
          label: "About Us",
        },
        {
          to: "gallery",
          label: "Gallery",
        },
      ],
    },
    {
      id: "configuration",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faCog} /> <span /> Configuration
        </div>
      ),
      links: [
        {
          to: "classes",
          label: "Classes",
        },
        {
          to: "sections",
          label: "Sections",
        },
        {
          to: "nationality",
          label: "Nationality",
        },
        {
          to: "religion",
          label: "Religion",
        },
        {
          to: "asignclass",
          label: "Assign Classes",
        },
        {
          to: "designation",
          label: "Designation",
        },
        {
          to: "subject",
          label: "Subject",
        },
        {
          to: "assignsub",
          label: "Assign Subject",
        },
        {
          to: "siblingdic",
          label: "Sibling Discount",
        },
        {
          to: "schooltiming",
          label: "School Timing",
        },
        {
          to: "schoolmanage",
          label: "School Manage",
        },
        {
          to: "configschol",
          label: "Configure Scholarship",
        },
        {
          to: "feerecipts",
          label: "Configure Fee Recipients",
        },
        {
          to: "accesscontrol",
          label: "Access Control",
        },
        {
          to: "configfee",
          label: "Configure Fee",
        },
        {
          to: "configsalary",
          label: "Configure Salary",
        },
      ],
    },
    {
      id: "reports",
      title: (
        <div className="text-start">
          <FontAwesomeIcon icon={faChartPie} /> <span /> Reports
        </div>
      ),
      links: [
        {
          to: "stuatt",
          label: "Student Attendance",
        },
        {
          to: "stafatt",
          label: "Staff Attendance",
        },
        {
          to: "sreport",
          label: "Students Report",
        },
        {
          to: "teacherrep",
          label: "Staff Report",
        },
        {
          to: "staffacc",
          label: "Staff Accounts",
        },
        {
          to: "saccounts",
          label: "Student Accounts",
        },
        {
          to: "srecieve",
          label: "Student Receiveables",
        },
        {
          to: "staffrecieve",
          label: "Staff Receiveables",
        },
        {
          to: "ledger",
          label: "General Ledger",
        },
        {
          to: "feereport",
          label: "Fee Report",
        },
        {
          to: "transfeerep",
          label: "Transport Fee Report",
        },
        {
          to: "inventoryrep",
          label: "Inventory Fee Report",
        },
        {
          to: "detailedrep",
          label: "Fee Detailed Report",
        },
        {
          to: "salarypaid",
          label: "Salary Paid",
        },
        {
          to: "sfeedback",
          label: "Student Feedback",
        },
        {
          to: "teacherfedback",
          label: "Teacher Feedback",
        },
        {
          to: "postalreport",
          label: "Postal Report",
        },
        {
          to: "visitorsrep",
          label: "Visitors Report",
        },
        {
          to: "studentrevrep",
          label: "Student Review Report",
        },
        {
          to: "staffrevrep",
          label: "Staff Review Report",
        },
        {
          to: "leaverep",
          label: "Leave Report",
        },
        {
          to: "inventoryreport",
          label: "Inventory Report",
        },
        {
          to: "libraryrep",
          label: "Library Report",
        },
        {
          to: "expencerep",
          label: "Expense Report",
        },
        {
          to: "daybook",
          label: "Day Book",
        },
        {
          to: "pl",
          label: "Profit & Loss",
        },
        {
          to: "transreport",
          label: "Transport Report",
        },
      ],
    },
  ];
  return (
    <div>
      {isSmallScreen && (
        <nav
          className={`navbar navbar-expand-sm navbarUser navbar-dark ${
            isSmallScreen ? "" : "d-none d-md-block"
          }`}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="#/">
              User Manual
            </a>
            <button
              className={`navbar-toggler ${isNavbarOpen ? "collapsed" : ""}`}
              aria-expanded={isNavbarOpen ? "true" : "false"}
              onClick={toggleNavbar}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                isNavbarOpen ? "show" : ""
              }`}
              class="collapse navbar-collapse"
              id="navbarContent"
            >
              <div class="navbar-nav mb-2 mb-lg-0">
                <div>
                  <Link className="text-white" to="dashboard">
                    <button
                      className="btn w-100 text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target=""
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      onClick={closeNavbar}
                    >
                      <div className="d-flex justify-content-start">
                        <div>
                          <FontAwesomeIcon icon={faHouse} /> <tab />
                          <span>Dashboard</span>
                        </div>
                      </div>
                    </button>
                  </Link>
                  {sections.map((section) =>
                    renderSection(section.id, section.title, section.links)
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
      {!isSmallScreen && (
        <div>
          <Link className="text-white" to="dashboard">
            <button
              className="btn w-100 text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=""
              aria-expanded="false"
              aria-controls="collapseExample"
              onClick={closeNavbar}
            >
              <div className="d-flex justify-content-start">
                <div>
                  <FontAwesomeIcon icon={faHouse} /> <tab />
                  <span>Dashboard</span>
                </div>
              </div>
            </button>
          </Link>
          {sections.map((section) =>
            renderSection(section.id, section.title, section.links)
          )}
        </div>
      )}
    </div>
  );
}

export default Navigation;
