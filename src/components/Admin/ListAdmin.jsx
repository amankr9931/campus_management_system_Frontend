import React, { Component } from 'react';

class ListAdmin extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
                students: [],
         }
       
    }


    render() {
        return (
            <div>
            <h2 className="text-center">List Of Admin</h2>
            <div className="row">
                {/* <button className="btn btn-primary" onClick={this.addStudent}>Add Student</button> */}
                {/* <button className="btn btn-dark"  onClick={this.redirectToLogin}>Login</button> */}
            </div>
            <div className="row">
                <table className="table table-striped table-borderd">

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
                       {/* <th> Actions</th>  */}
                    </tr>
                </thead>

                <tbody>

                </tbody>
                    {
                        this.state.students.map(
                            student =>
                                <tr key = {student.id}>
                                    <td> { student.firstName} </td>
                                    <td> {student.lastName}</td>
                                    <td> {student.emailId}</td>
                                    <td> {student.password}</td>
                                    <td> {student.confirmPassword}</td>
                                    <td> {student.enrollmentNumber}</td>
                                    <td> {student.branch}</td>
                                    <td> {student.semester}</td>
                                    <td> {student.contact}</td>
                                </tr>

                            )
                    }
                </table>

            </div>
        </div>
        );
    }
}

export default ListAdmin;