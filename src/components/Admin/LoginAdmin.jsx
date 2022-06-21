import React, { Component } from 'react';
import AdminService from '../../services/AdminService';

class LoginAdmin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePassword = this.changePassword.bind(this);

        this.loginAdmin = this.loginAdmin.bind(this);
    }

    loginAdmin = (e) => {
        e.preventDefault();

        let admin = { email: this.state.email , password: this.state.password};
        console.log('admin =>' + JSON.stringify(admin));

        AdminService.loginAdmin(admin).then(res =>{
            console.log(res.data);
            this.props.history.push('/admin-operation', res.data);
        });
    }


    cancel() {
        this.props.history.push("/students");
    }



    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Admin Login</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler} />
                                </div>
                                <div className="form-group">
                                    <label> Password: </label>
                                    <input placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePassword} />
                                </div>

                                <button className="btn btn-success" onClick={this.loginAdmin}>Login </button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancle</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginAdmin;