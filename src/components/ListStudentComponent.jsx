import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ListStudentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            students: [],
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }


    componentDidMount() {
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data });
        });
    }

    editStudent(id) {
        // e.preventDefault();
        // this.props.history.push(`/update-student/${id}`);
        this.props.history.push(`/add-student/${id}`);
    }
    viewStudent(id) {
        this.props.history.push(`/view-student/${id}`);
    }
    deleteStudent(id) {
        StudentService.deleteStudent(id).then(res => {
this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
        
    }

    addStudent = (e) => {
        e.preventDefault();
        this.props.history.push('/add-student/-1');
    }
    redirectToLogin = (e) => {
        e.preventDefault();
        this.props.history.push('/login-student');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Student List</h2>
                <div className="row">
                    {/* <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button>
                    <button className="btn btn-dark" onClick={this.redirectToLogin}>Login</button> */}

                </div>
                <div className="row">
                    <table className="table table-striped table-borderd table-j">

                        <thead>
                            <tr>
                                <th> Student First Name</th>
                                <th> Student Last Name</th>
                                <th> Student Email Id</th>
                                <th> Student Password</th>
                                <th> Student Enrollment</th>
                                <th> Student Branch</th>
                                <th> Student Semester</th>
                                <th> Student contact</th>
                                <th> Actions</th> 
                            </tr>
                        </thead>

                        <tbody>


                            {
                                this.state.students.map(
                                    student =>
                                        <tr key={student.id}>
                                            <td> {student.firstName} </td>
                                            <td> {student.lastName}</td>
                                            <td> {student.emailId}</td>
                                            <td> {student.password}</td>
                                            <td> {student.confirmPassword}</td>
                                            <td> {student.enrollment}</td>
                                            <td> {student.branch}</td>
                                            <td> {student.sem}</td>
                                            <td> {student.contact}</td>

                                            <td>
                                                <button className="btn btn-info" onClick={() => this.editStudent(student.id)}>Update Student</button>
                                                <button className="btn btn-danger" onClick={() => this.deleteStudent(student.id)}>Delete Student</button>
                                                <button className="btn btn-danger" onClick={() => this.viewStudent(student.id)}>View Student</button>
                                            </td>

                                        </tr>

                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

export default ListStudentComponent;