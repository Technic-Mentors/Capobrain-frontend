import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import ScrollToTop from "./ScrollToTop";
import FeaturePage from "./Components/FeaturePage";
import Topbar from "./Components/Topbar";
import Demo from "./Components/Demo";
import Layout from "./Components/Layout";
import Admin from "./Components/Admin";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import Issue from "./Inventory/Issue";
import Visitors from "./Reception/Visitors";
import Teaching from "./Staff.js/Teaching";
import Recieve from "./Fee/Recieve";
import Staff from "./Accounts/Staff";
import Student from "./Accounts/Student";
import Add from "./Results/Add";
import List from "./Results/List";
import Config from "./Certificate/Config";
import Studentcard from "./Certificate/Studentcard";
import Lesson from "./Accademics/Lesson";
import Homework from "./Accademics/Homework";
import Courses from "./LMS/Courses";
import Vehicle from "./Transport/Vehicle";
import Addexpense from "./Expensis/Addexpense";
import Manageexpen from "./Expensis/Manageexpen";
import News from "./Announcements/News";
import Chat from "./Commnuication/Chat";
import Complains from "./Reception/Complains";
import Dispatch from "./Reception/Dispatch";
import Front from "./Reception/Front";
import Phonecall from "./Reception/Phonecall";
import Postalrecieve from "./Reception/Postalrecieve";
import Feedbacklist from "./Staff.js/Feedbacklist";
import Nonteachingstaff from "./Staff.js/Nonteachingstaff";
import Staffreview from "./Staff.js/Staffreview";
import Todos from "./Staff.js/Todos";
import Withdraw from "./Staff.js/Withdraw";
import Admilist from "./Students/Admilist";
import Admission from "./Students/Admission";
import Fedbackrecord from "./Students/Fedbackrecord";
import Frecords from "./Students/Frecords";
import Onlineadmissions from "./Students/Onlineadmissions";
import Passout from "./Students/Passout";
import Promote from "./Students/Promote";
import Stureview from "./Students/Stureview";
import Witdraw from "./Students/Witdraw";
import Innventory from "./Inventory/Innventory";
import Invoice from "./Inventory/Invoice";
import Purchase from "./Inventory/Purchase";
import Purchaseinv from "./Inventory/Purchaseinv";
import Supplier from "./Inventory/Supplier";
import Commitmentli from "./Fee/Commitmentli";
import Defaultst from "./Fee/Defaultst";
import Discounts from "./Fee/Discounts";
import Management from "./Fee/Management";
import Refundpay from "./Fee/Refundpay";
import Scholorship from "./Fee/Scholorship";
import Updatefee from "./Fee/Updatefee";
import Supplieracc from "./Accounts/Supplieracc";
import Withdrawpay from "./Accounts/Withdrawpay";
import Familywise from "./Accounts/Familywise";
import Salarydeduct from "./Accounts/Salarydeduct";
import Subjectwise from "./Results/Subjectwise";
import Studentcerti from "./Certificate/Studentcerti";
import Staffcerti from "./Certificate/Staffcerti";
import Staffcard from "./Certificate/Staffcard";
import Uploadmaterial from "./Accademics/Uploadmaterial";
import Homeworkmark from "./Accademics/Homeworkmark";
import Homeworkmarli from "./Accademics/Homeworkmarli";
import Summerwork from "./Accademics/Summerwork";
import Lecture from "./LMS/Lecture";
import Coursecat from "./LMS/Coursecat";
import Assignveh from "./Transport/Assignveh";
import Routess from "./Transport/Routes";
import Expencecate from "./Expensis/Expencecate";
import Notice from "./Announcements/Notice";
import Message from "./Commnuication/Message";
import Updatefeeli from "./Fee/Updatefeeli";
import Salarycycle from "./Accounts cycle/Salarycycle";
import Generatevoucher from "./Accounts cycle/Generatevoucher";
import Printvoucher from "./Accounts cycle/Printvoucher";
import Calender1 from "./Accounts cycle/Calender";
import Datesheet from "./Exams/Datesheet";
import Configpapers from "./Exams/Configpapers";
import Configexams from "./Exams/Configexams";
import Classtimetable from "./Accademics/Classtimetable";
import Assets from "./Fixed Assets/Assets";
import Assetstype from "./Fixed Assets/Assetstype";
import Leave from "./Attendence/Leave";
import Studentatt from "./Attendence/Studentatt";
import Staffatt from "./Attendence/Staffatt";
import Studentaccadj from "./Fee/Studentaccadj";
import Questionbank from "./Admition/Questionbank";
import Classwiseque from "./Admition/Classwiseque";
import Typesp from "./Sports/Typesp";
import Sportsdeta from "./Sports/Sportsdeta";
import Users from "./Userman/Users";
import Roles from "./Userman/Roles";
import Librarybook from "./Library/Librarybook";
import Issuevooks from "./Library/Issuevooks";
import Configchap from "./Generator/Configchap";
import Configques from "./Generator/Configques";
import Configtopic from "./Generator/Configtopic";
import Papergen from "./Generator/Papergen";
import Home2 from "./Website/Home";
import Aboutus from "./Website/Aboutus";
import Gallery from "./Website/Gallery";
import Viewsite from "./Website/Viewsite";
import Events from "./Website/Events";
import Classes from "./Configuration/Classes";
import Sections from "./Configuration/Sections";
import Nationality from "./Configuration/Nationality";
import Releigion from "./Configuration/Releigion";
import Designations from "./Configuration/Designations";
import Assignclass from "./Configuration/Assignclass";
import Subject from "./Configuration/Subject";
import Assignsub from "./Configuration/Assignsub";
import Siblingdic from "./Configuration/Siblingdic";
import Schooltiming from "./Configuration/Schooltiming";
import Schoolsmanage from "./Configuration/Schoolsmanage";
import Confischol from "./Configuration/Confischol";
import Feerecipts from "./Configuration/Feerecipts";
import Accesscont from "./Configuration/Accesscont";
import Configfee from "./Configuration/Configfee";
import Confisalary from "./Configuration/Confisalary";
import Studentatt2 from "./Reports/Studentatt";
import Staffatt2 from "./Reports/Staffatt";
import Studentreport from "./Reports/Studentreport";
import Teachersrepor from "./Reports/Teachersrepor";
import Staffacc from "./Reports/Staffacc";
import Studentaccounts from "./Reports/Studentaccounts";
import Studentrecieve from "./Reports/Studentrecieve";
import Staffreceive from "./Reports/Staffreceive";
import Ledger from "./Reports/Ledger";
import Feereport from "./Reports/Feereport";
import Transportfeerep from "./Reports/Transportfeerep";
import Inventoryfeerep from "./Reports/Inventoryfeerep";
import Feedetailrep from "./Reports/Feedetailrep";
import Salarypaid from "./Reports/Salarypaid";
import Studentfed from "./Reports/Studentfed";
import Teacherfeedback from "./Reports/Teacherfeedback";
import Postalreport from "./Reports/Postalreport";
import Visitorsrep from "./Reports/Visitorsrep";
import Studentrevrep from "./Reports/Studentrevrep";
import Staffrevrep from "./Reports/Staffrevrep";
import Leaverep from "./Reports/Leaverep";
import Innventoryrep from "./Reports/Innventoryrep";
import Libraryrep from "./Reports/Libraryrep";
import Expencerep from "./Reports/Expencerep";
import Daybook from "./Reports/Daybook";
import Profitloss from "./Reports/Profitloss";
import Transportreport from "./Reports/Transportreport";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
import Blog from "./Components/Blog";
import Blogcategory from "./Components/Blogcategory";
import Demorequest from "./Components/Demorequest";
import Blogcat from "./Components/Blogcat";
import Allposts from "./Components/Allposts";
import Addcategory from "./Components/Addcategory";
import Allcategory from "./Components/Allcategory";
import Board from "./Components/Board";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog/:postSlug" element={<Blogcat/>} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/t&c" element={<Terms/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          

          {/* Admin Start*/}
          <Route />
          <Route path="/admin" element={<Admin />}>
          <Route index element={<Navigate to="addblog" />} />
            <Route path="demoreq" element={<Demorequest/>}/>
            <Route path="addblog" element={<Blogcategory/>}/>
            <Route path="allposts" element={<Allposts/>}/>
            <Route path="addcategory" element={<Addcategory/>}/>
            <Route path="allcategory" element={<Allcategory/>}/>
            <Route path="board" element={<Board/>}/>
            
          </Route>
          {/* Admin End*/}

          {/* User Manual */}
          <Route path="/user-manual" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            {/* Reception start*/}
            <Route path="visitors-meeting" element={<Visitors />} />
            <Route path="online-complains-list" element={<Complains />} />
            <Route path="postal-dispatch" element={<Dispatch />} />
            <Route path="configure-front-office" element={<Front />} />
            <Route path="phone-call-log" element={<Phonecall />} />
            <Route path="postal-recieve" element={<Postalrecieve />} />
            {/* Reception end */}

            {/* Staff Start */}
            <Route path="teaching-staff" element={<Teaching />} />
            <Route path="feedback-list" element={<Feedbacklist />} />
            <Route path="non-teaching-staff" element={<Nonteachingstaff />} />
            <Route path="staff-review" element={<Staffreview />} />
            <Route path="staff-todos" element={<Todos />} />
            <Route path="staff-withdraw" element={<Withdraw />} />
            {/* Staff End */}

            {/* Students Start */}
            <Route path="students-list" element={<Admilist />} />
            <Route path="new-admission" element={<Admission />} />
            <Route path="feedback-record" element={<Fedbackrecord />} />
            <Route path="family-record" element={<Frecords />} />
            <Route path="online-admissions" element={<Onlineadmissions />} />
            <Route path="passout-students" element={<Passout />} />
            <Route path="promote-students" element={<Promote />} />
            <Route path="students-review" element={<Stureview />} />
            <Route path="withdraw-students" element={<Witdraw />} />
            {/* Students End */}

            {/* Attendence Start */}
            <Route path="leave-request" element={<Leave />} />
            <Route path="student-attendance" element={<Studentatt />} />
            <Route path="staff-attendance" element={<Staffatt />} />
            {/* Attendence End */}

            {/* Inventory Start */}
            <Route path="issue-inventory" element={<Issue />} />
            <Route path="inventory" element={<Innventory />} />
            <Route path="invoice-list" element={<Invoice />} />
            <Route path="purchase-list" element={<Purchase />} />
            <Route path="purchase-inventory" element={<Purchaseinv />} />
            <Route path="supplier" element={<Supplier />} />
            {/* Inventory End */}

            {/* Fee Start */}
            <Route path="recieve-fee" element={<Recieve />} />
            <Route path="update-fee-list" element={<Updatefeeli />} />
            <Route path="fee-comitment-list" element={<Commitmentli />} />
            <Route path="default-students" element={<Defaultst />} />
            <Route path="discounts" element={<Discounts />} />
            <Route path="student-account-adjust" element={<Studentaccadj />} />
            <Route path="fine-management" element={<Management />} />
            <Route path="refund-payment" element={<Refundpay />} />
            <Route path="scholarship" element={<Scholorship />} />
            <Route path="update-fee" element={<Updatefee />} />
            {/* Fee End */}

            {/* Accounts Cycle Start */}
            <Route path="calender" element={<Calender1 />} />
            <Route path="print-vouchers" element={<Printvoucher />} />
            <Route path="generate-vouchers" element={<Generatevoucher />} />
            <Route path="salary-cycle" element={<Salarycycle />} />
            {/* Accounts Cycle End */}

            {/* Accounts Start */}
            <Route path="staff-account" element={<Staff />} />
            <Route path="students-account" element={<Student />} />
            <Route path="supplier-account" element={<Supplieracc />} />
            <Route path="withdraw-amount" element={<Withdrawpay />} />
            <Route path="family-wise-account" element={<Familywise />} />
            <Route path="salary-deduction" element={<Salarydeduct />} />
            {/* Accounts End */}

            {/* Exams Start */}
            <Route path="configure-exams" element={<Configexams />} />
            <Route path="configure-papers" element={<Configpapers />} />
            <Route path="date-sheet" element={<Datesheet />} />
            {/* Exams End */}

            {/* Result Start */}
            <Route path="add-result" element={<Add />} />
            <Route path="result-list" element={<List />} />
            <Route path="subject-wise-result" element={<Subjectwise />} />
            {/* Result End */}

            {/* Certificate Start */}
            <Route path="configure-certificate" element={<Config />} />
            <Route path="student-id-card" element={<Studentcard />} />
            <Route path="student-certificate" element={<Studentcerti />} />
            <Route path="staff-certificate" element={<Staffcerti />} />
            <Route path="staff-id-card" element={<Staffcard />} />
            {/* Certificate End */}

            {/* Accademics Start */}
            <Route path="lesson-planning" element={<Lesson />} />
            <Route path="home-work" element={<Homework />} />
            <Route path="upload-material" element={<Uploadmaterial />} />
            <Route path="home-work-marking" element={<Homeworkmark />} />
            <Route path="home-work-marking-list" element={<Homeworkmarli />} />
            <Route path="summer-home-work" element={<Summerwork />} />
            <Route path="class-time-table" element={<Classtimetable />} />
            {/* Accademics End */}

            {/* LMS Start */}
            <Route path="courses" element={<Courses />} />
            <Route path="lecture" element={<Lecture />} />
            <Route path="course-category" element={<Coursecat />} />
            {/* LMS End */}

            {/* Transport Start */}
            <Route path="vehicles" element={<Vehicle />} />
            <Route path="assign-vehicles" element={<Assignveh />} />
            <Route path="routes" element={<Routess />} />
            {/* Transport End */}

            {/* Expence Start */}
            <Route path="add-expense" element={<Addexpense />} />
            <Route path="manage-expense" element={<Manageexpen />} />
            <Route path="expence-category" element={<Expencecate />} />
            {/* Expence End */}

            {/* Assets Start */}
            <Route path="assets" element={<Assets />} />
            <Route path="asset-type" element={<Assetstype />} />
            {/* Assets End */}

            {/* Announcements Start */}
            <Route path="news" element={<News />} />
            <Route path="notice" element={<Notice />} />
            {/* Announcements End */}

            {/* Communication Start */}
            <Route path="chat" element={<Chat />} />
            <Route path="message" element={<Message />} />
            {/* Communication End */}

            {/* Admition Start */}
            <Route path="class-wise-question" element={<Classwiseque />} />
            <Route path="question-bank" element={<Questionbank />} />
            {/* Admition End */}

            {/* Sports Start */}
            <Route path="sports-type" element={<Typesp />} />
            <Route path="sports-detail" element={<Sportsdeta />} />
            {/* Sports End */}

            {/* Management Start */}
            <Route path="users" element={<Users />} />
            <Route path="roles" element={<Roles />} />
            {/* Management End */}

            {/* Library Start */}
            <Route path="library-books" element={<Librarybook />} />
            <Route path="issue-books" element={<Issuevooks />} />
            {/* Library End */}

            {/* Generator Start */}
            <Route path="configure-chapter" element={<Configchap />} />
            <Route path="configure-topic" element={<Configtopic />} />
            <Route path="configure-question" element={<Configques />} />
            <Route path="paper-generate" element={<Papergen />} />
            {/* Generator End */}

            {/* Website Start */}
            <Route path="home" element={<Home2 />} />
            <Route path="about-us" element={<Aboutus />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="visit-website" element={<Viewsite />} />
            <Route path="events" element={<Events />} />
            {/* Website End */}

            {/* Configuration Start */}
            <Route path="classes" element={<Classes />} />
            <Route path="sections" element={<Sections />} />
            <Route path="nationality" element={<Nationality />} />
            <Route path="religion" element={<Releigion />} />
            <Route path="assign-classes" element={<Assignclass />} />
            <Route path="designation" element={<Designations />} />
            <Route path="subject" element={<Subject />} />
            <Route path="assign-subject" element={<Assignsub />} />
            <Route path="sibling-discount" element={<Siblingdic />} />
            <Route path="school-timing" element={<Schooltiming />} />
            <Route path="school-manage" element={<Schoolsmanage />} />
            <Route path="configure-scholarship" element={<Confischol />} />
            <Route path="configure-fee-recipients" element={<Feerecipts />} />
            <Route path="access-control" element={<Accesscont />} />
            <Route path="configure-fee" element={<Configfee />} />
            <Route path="configure-salary" element={<Confisalary />} />
            {/* configuration End */}

            {/* Reports Start */}
            <Route path="student-attendnce" element={<Studentatt2/>} />
            <Route path="staff-attendnce" element={<Staffatt2/>} />
            <Route path="students-report" element={<Studentreport/>} />
            <Route path="staff-report" element={<Teachersrepor/>} />
            <Route path="staff-accounts" element={<Staffacc/>} />
            <Route path="student-accounts" element={<Studentaccounts/>} />
            <Route path="student-recieveables" element={<Studentrecieve/>} />
            <Route path="staff-recieveables" element={<Staffreceive/>} />
            <Route path="general-ledger" element={<Ledger/>} />
            <Route path="fee-report" element={<Feereport/>} />
            <Route path="transport-fee-report" element={<Transportfeerep/>} />
            <Route path="inventory-fee-repport" element={<Inventoryfeerep/>} />
            <Route path="fee-detailed-report" element={<Feedetailrep/>} />
            <Route path="salary-paid" element={<Salarypaid/>} />
            <Route path="student-feedback" element={<Studentfed/>} />
            <Route path="teacher-feedback" element={<Teacherfeedback/>} />
            <Route path="postal-report" element={<Postalreport/>} />
            <Route path="visitors-report" element={<Visitorsrep/>} />
            <Route path="student-review-report" element={<Studentrevrep/>} />
            <Route path="staff-review-report" element={<Staffrevrep/>} />
            <Route path="leave-report" element={<Leaverep/>} />
            <Route path="inventory-report" element={<Innventoryrep/>} />
            <Route path="library-report" element={<Libraryrep/>} />
            <Route path="expense-report" element={<Expencerep/>} />
            <Route path="day-book" element={<Daybook/>} />
            <Route path="profit & loss" element={<Profitloss/>} />
            <Route path="transreport-report" element={<Transportreport/>} />
            {/* Reports End */}
            
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
