import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
            emailId: '',
            password:'',
            
        }
        this.changePassword = this.changePassword.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        
        this.loginStudent = this.loginStudent.bind(this);
    }
    loginStudent = (e) => {
        // console.log("jayesh");
        e.preventDefault();
        let student = { emailId: this.state.emailId , password: this.state.password};
        console.log('student =>' + JSON.stringify(student));

        StudentService.loginStudent(student).then(res =>{
            console.log(res.data);
            this.props.history.push('/students/dashboard', res.data);
        });
    }

cancel(){
    this.props.history.push("/students");
}

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~ inputs dalne k bad event dandlers call honge j info le kar jaenge
   

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ emailId: event.target.value });
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Student Login</h3>
                        <div className="card-body">
                            <form>                           
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

                                <button className="btn btn-success" onClick={this.loginStudent}>Login </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;