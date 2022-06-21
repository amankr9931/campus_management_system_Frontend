import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import CreateStudentComponent from './components/CreateStudentComponent';
import IndexPageComponent from './components/IndexPageComponent';
import Dashboard from './components/Dashboard';
import AdminComponent from './components/Admin/AdminComponent';
import CreateAdmin from './components/Admin/CreateAdmin';
import LoginAdmin from './components/Admin/LoginAdmin';
import ListAdmin from './components/Admin/ListAdmin';
import OperationsAdmin from './components/Admin/OperationsAdmin';
import UpdateStudent from './components/UpdateStudent';
import ListTimeTable from './components/Dashboard/ListTimeTable';
import Holidays from './components/Dashboard/Holidays';
import StudentFeedback from './components/Dashboard/StudentFeedback';
import AddFeedback from './components/Dashboard/AddFeedback';
import Notices from './components/Dashboard/Notices';
import AddUpdateBoth from './components/AddUpdateBoth';
import ViewStudent from './components/ViewStudent';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          
            <div className="container-fluid main-container" >
              <Switch>
                <Route path ="/" exact component = {IndexPageComponent}></Route>
                <Route path ="/students" exact component = {ListStudentComponent}></Route>
                <Route path ="/add-student/:id" component = {CreateStudentComponent}></Route>
                <Route path ="/login-student" exact component = {LoginComponent}></Route>
                <Route path ="/students/dashboard" exact component = {Dashboard}></Route>
                <Route path ="/admin"  component = {AdminComponent}></Route>
                <Route path ="/add-admin" component = {CreateAdmin}></Route>
                <Route path ="/login-admin" component = {LoginAdmin}></Route>
                <Route path ="/list-admin" component = {ListAdmin}></Route>
                <Route path ="/admin-operation" component = {OperationsAdmin}></Route>
                {/* <Route path ="/update-student/:id" component = {UpdateStudent}></Route> */}
                <Route path ="/timetable" component = {ListTimeTable}></Route>
                <Route path ="/holiday" component = {Holidays}></Route>
                <Route path ="/student-feedback" component = {StudentFeedback}></Route>
                <Route path ="/add-feedback" component = {AddFeedback}></Route>
                <Route path ="/notice" component = {Notices}></Route>
                {/* <Route path ="/add-student/:id" component = {AddUpdateBoth}></Route> */}
                <Route path ="/view-student/:id" component = {ViewStudent}></Route>
                <Route path ="/contact-us" component = {ContactUs}></Route>
              </Switch>      
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
