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
import Car from "./Components/Car";

function App() {
  return (
    <div>
      <Router>
        <Topbar />
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/c" element={<Car/>} />
          
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
            <Route path="visitor" element={<Visitors />} />
            <Route path="complains" element={<Complains />} />
            <Route path="dispatch" element={<Dispatch />} />
            <Route path="frontoffice" element={<Front />} />
            <Route path="pcall" element={<Phonecall />} />
            <Route path="precieve" element={<Postalrecieve />} />
            {/* Reception end */}

            {/* Staff Start */}
            <Route path="teaching" element={<Teaching />} />
            <Route path="fedlist" element={<Feedbacklist />} />
            <Route path="tstaff" element={<Nonteachingstaff />} />
            <Route path="sreview" element={<Staffreview />} />
            <Route path="stodos" element={<Todos />} />
            <Route path="swithdraw" element={<Withdraw />} />
            {/* Staff End */}

            {/* Students Start */}
            <Route path="alist" element={<Admilist />} />
            <Route path="newadd" element={<Admission />} />
            <Route path="feedbackrecord" element={<Fedbackrecord />} />
            <Route path="frecord" element={<Frecords />} />
            <Route path="onlineadd" element={<Onlineadmissions />} />
            <Route path="passstudents" element={<Passout />} />
            <Route path="prostudents" element={<Promote />} />
            <Route path="studentreview" element={<Stureview />} />
            <Route path="withstudents" element={<Witdraw />} />
            {/* Students End */}

            {/* Attendence Start */}
            <Route path="leave" element={<Leave />} />
            <Route path="sattendence" element={<Studentatt />} />
            <Route path="staffatt" element={<Staffatt />} />
            {/* Attendence End */}

            {/* Inventory Start */}
            <Route path="issue" element={<Issue />} />
            <Route path="inventory" element={<Innventory />} />
            <Route path="invoiceli" element={<Invoice />} />
            <Route path="purchaseli" element={<Purchase />} />
            <Route path="purchseinven" element={<Purchaseinv />} />
            <Route path="supplier" element={<Supplier />} />
            {/* Inventory End */}

            {/* Fee Start */}
            <Route path="recievefee" element={<Recieve />} />
            <Route path="updatefeeli" element={<Updatefeeli />} />
            <Route path="feecommitli" element={<Commitmentli />} />
            <Route path="defaultstu" element={<Defaultst />} />
            <Route path="discounts" element={<Discounts />} />
            <Route path="staccadj" element={<Studentaccadj />} />
            <Route path="management" element={<Management />} />
            <Route path="refundpay" element={<Refundpay />} />
            <Route path="scholorship" element={<Scholorship />} />
            <Route path="updatefee" element={<Updatefee />} />
            {/* Fee End */}

            {/* Accounts Cycle Start */}
            <Route path="calender1" element={<Calender1 />} />
            <Route path="printvouch" element={<Printvoucher />} />
            <Route path="generatevouch" element={<Generatevoucher />} />
            <Route path="salarycycle" element={<Salarycycle />} />
            {/* Accounts Cycle End */}

            {/* Accounts Start */}
            <Route path="staff" element={<Staff />} />
            <Route path="student" element={<Student />} />
            <Route path="supplieracc" element={<Supplieracc />} />
            <Route path="withdrawamo" element={<Withdrawpay />} />
            <Route path="familywise" element={<Familywise />} />
            <Route path="salarydeduct" element={<Salarydeduct />} />
            {/* Accounts End */}

            {/* Exams Start */}
            <Route path="configexams" element={<Configexams />} />
            <Route path="configpapers" element={<Configpapers />} />
            <Route path="datesheet" element={<Datesheet />} />
            {/* Exams End */}

            {/* Result Start */}
            <Route path="addresult" element={<Add />} />
            <Route path="resultlist" element={<List />} />
            <Route path="subjectwise" element={<Subjectwise />} />
            {/* Result End */}

            {/* Student Start */}
            <Route path="configcert" element={<Config />} />
            <Route path="studentcard" element={<Studentcard />} />
            <Route path="studntcerti" element={<Studentcerti />} />
            <Route path="staffcerti" element={<Staffcerti />} />
            <Route path="staffcard" element={<Staffcard />} />
            {/* Student End */}

            {/* Accademics Start */}
            <Route path="lesson" element={<Lesson />} />
            <Route path="homework" element={<Homework />} />
            <Route path="uploadmat" element={<Uploadmaterial />} />
            <Route path="homeworkmar" element={<Homeworkmark />} />
            <Route path="homeworkmarli" element={<Homeworkmarli />} />
            <Route path="summerwork" element={<Summerwork />} />
            <Route path="classtimetable" element={<Classtimetable />} />
            {/* Accademics End */}

            {/* LMS Start */}
            <Route path="courses" element={<Courses />} />
            <Route path="lecture" element={<Lecture />} />
            <Route path="coursecat" element={<Coursecat />} />
            {/* LMS End */}

            {/* Transport Start */}
            <Route path="vehicle" element={<Vehicle />} />
            <Route path="assignveh" element={<Assignveh />} />
            <Route path="routes" element={<Routess />} />
            {/* Transport End */}

            {/* Expence Start */}
            <Route path="addexpense" element={<Addexpense />} />
            <Route path="manageexpense" element={<Manageexpen />} />
            <Route path="expencecat" element={<Expencecate />} />
            {/* Expence End */}

            {/* Assets Start */}
            <Route path="assets" element={<Assets />} />
            <Route path="assettype" element={<Assetstype />} />
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
            <Route path="classwiseques" element={<Classwiseque />} />
            <Route path="questionbank" element={<Questionbank />} />
            {/* Admition End */}

            {/* Sports Start */}
            <Route path="typesp" element={<Typesp />} />
            <Route path="sportsdeta" element={<Sportsdeta />} />
            {/* Sports End */}

            {/* Management Start */}
            <Route path="usersmanage" element={<Users />} />
            <Route path="rolesmanage" element={<Roles />} />
            {/* Management End */}

            {/* Library Start */}
            <Route path="librarybook" element={<Librarybook />} />
            <Route path="issuebook" element={<Issuevooks />} />
            {/* Library End */}

            {/* Generator Start */}
            <Route path="configchap" element={<Configchap />} />
            <Route path="configtopic" element={<Configtopic />} />
            <Route path="configques" element={<Configques />} />
            <Route path="papergene" element={<Papergen />} />
            {/* Generator End */}

            {/* Website Start */}
            <Route path="home" element={<Home2 />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="viewsite" element={<Viewsite />} />
            <Route path="events" element={<Events />} />
            {/* Website End */}

            {/* Configuration Start */}
            <Route path="classes" element={<Classes />} />
            <Route path="sections" element={<Sections />} />
            <Route path="nationality" element={<Nationality />} />
            <Route path="religion" element={<Releigion />} />
            <Route path="asignclass" element={<Assignclass />} />
            <Route path="designation" element={<Designations />} />
            <Route path="subject" element={<Subject />} />
            <Route path="assignsub" element={<Assignsub />} />
            <Route path="siblingdic" element={<Siblingdic />} />
            <Route path="schooltiming" element={<Schooltiming />} />
            <Route path="schoolmanage" element={<Schoolsmanage />} />
            <Route path="configschol" element={<Confischol />} />
            <Route path="feerecipts" element={<Feerecipts />} />
            <Route path="accesscontrol" element={<Accesscont />} />
            <Route path="configfee" element={<Configfee />} />
            <Route path="configsalary" element={<Confisalary />} />
            {/* configuration End */}

            {/* Reports Start */}
            <Route path="stuatt" element={<Studentatt2/>} />
            <Route path="stafatt" element={<Staffatt2/>} />
            <Route path="sreport" element={<Studentreport/>} />
            <Route path="teacherrep" element={<Teachersrepor/>} />
            <Route path="staffacc" element={<Staffacc/>} />
            <Route path="saccounts" element={<Studentaccounts/>} />
            <Route path="srecieve" element={<Studentrecieve/>} />
            <Route path="staffrecieve" element={<Staffreceive/>} />
            <Route path="ledger" element={<Ledger/>} />
            <Route path="feereport" element={<Feereport/>} />
            <Route path="transfeerep" element={<Transportfeerep/>} />
            <Route path="inventoryrep" element={<Inventoryfeerep/>} />
            <Route path="detailedrep" element={<Feedetailrep/>} />
            <Route path="salarypaid" element={<Salarypaid/>} />
            <Route path="sfeedback" element={<Studentfed/>} />
            <Route path="teacherfedback" element={<Teacherfeedback/>} />
            <Route path="postalreport" element={<Postalreport/>} />
            <Route path="visitorsrep" element={<Visitorsrep/>} />
            <Route path="studentrevrep" element={<Studentrevrep/>} />
            <Route path="staffrevrep" element={<Staffrevrep/>} />
            <Route path="leaverep" element={<Leaverep/>} />
            <Route path="inventoryreport" element={<Innventoryrep/>} />
            <Route path="libraryrep" element={<Libraryrep/>} />
            <Route path="expencerep" element={<Expencerep/>} />
            <Route path="daybook" element={<Daybook/>} />
            <Route path="pl" element={<Profitloss/>} />
            <Route path="transreport" element={<Transportreport/>} />
            {/* Reports End */}
            
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
