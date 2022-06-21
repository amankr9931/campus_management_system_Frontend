import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            password: '',
            confirmPassword: '',
            enrollment: '',
            branch: '',
            sem: '',
            contact: '',

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
        this.changeEnrollmentNumber = this.changeEnrollmentNumber.bind(this);
        this.changeBranch = this.changeBranch.bind(this);
        this.changeSemester = this.changeSemester.bind(this);
        this.changeContact = this.changeContact.bind(this);
        this.saveStudent = this.saveStudent.bind(this);
    }

    componentDidMount() {

        if (this.state.id == -1) {
            return
        }
        else {
            StudentService.getStudentById(this.state.id).then((res) => {
                let student = res.data;
                this.setState({
                    firstName: student.firstName,
                    lastName: student.lastName,
                    emailId: student.emailId,
                    password: student.password,
                    confirmPassword: student.confirmPassword,
                    enrollment: student.enrollment,
                    branch: student.branch,
                    sem: student.sem,
                    contact: student.contact,
                });
            });

        }

    }
//save or Update
    saveStudent = (e) => {
        e.preventDefault();
        let student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            enrollmentNumber: this.state.enrollmentNumber,
            branch: this.state.branch,
            semester: this.state.semester,
            contact: this.state.contact
        };
        console.log('student =>' + JSON.stringify(student));

        if (this.state.id == -1) {
            StudentService.createStudent(student).then(res => {
                this.props.history.push('/students');
            });
        }
        else {
            StudentService.updateStudent(student, this.state.id).then(res => {
                this.props.history.push('/students');
            });
        }

        
    }

    cancel() {
        this.props.history.push("/students");
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~ inputs dalne k bad event dandlers call honge j info le kar jaenge
    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    changeConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value });
    }
    changeEnrollmentNumber = (event) => {
        this.setState({ enrollment: event.target.value });
    }
    changeBranch = (event) => {
        this.setState({ branch: event.target.value });
    }
    changeSemester = (event) => {
        this.setState({ sem: event.target.value });
    }
    changeContact = (event) => {
        this.setState({ contact: event.target.value });
    }

    getTitle(){
        if(this.state.id == -1){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
            }
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {/* <h3 className="text-center">Add Student</h3> */}
                        {
                            this.getTitle()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name:</label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                </div>

                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                </div>

                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailHandler} />
                                </div>

                                <div className="form-group">
                                    <label> Password: </label>
                                    <input placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePassword} />
                                </div>

                                <div className="form-group">
                                    <label> Confirm Password: </label>
                                    <input placeholder="Confirm Password" name=" confirmPassword" className="form-control"
                                        value={this.state.confirmPassword} onChange={this.changeConfirmPassword} />
                                </div>

                                <div className="form-group">
                                    <label> Enrollment Number: </label>
                                    <input placeholder="enrollment number" name="enrollment" className="form-control"
                                        value={this.state.enrollment} onChange={this.changeEnrollmentNumber} />
                                </div>

                                <div className="form-group">
                                    <label> Branch: </label>
                                    <input placeholder="Branch" name="branch" className="form-control"
                                        value={this.state.branch} onChange={this.changeBranch} />
                                </div>
                                <div className="form-group">
                                    <label> Semester: </label>
                                    <input placeholder="Semester" name="sem" className="form-control"
                                        value={this.state.sem} onChange={this.changeSemester} />
                                </div>
                                <div className="form-group">
                                    <label> Contact: </label>
                                    <input placeholder="Contact" name="contact" className="form-control"
                                        value={this.state.contact} onChange={this.changeContact} />
                                </div>



                                <button className="btn btn-success offset-md-4 " style={{
                                    height: 30, marginTop: 10, marginBottom: 10, paddingBottom: 30
                                }} onClick={this.saveStudent}>Save </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancle</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStudentComponent;