import React, { Component } from 'react';
import AdminService from '../../services/AdminService';


class CreateAdmin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveAdmin = this.saveAdmin.bind(this);
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    saveAdmin = (e) => {
        e.preventDefault();
        let admin = { name: this.state.name,email: this.state.email, password: this.state.password}
        console.log('admin =>' + JSON.stringify(admin));

        AdminService.createAdmin(admin).then(res =>{
            this.props.history.push('/login-admin');
        });
    }

    cancel(){
        this.props.history.push("/");
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Admin</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input placeholder="Name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler} />
                                </div>

                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler} />
                                </div>

                                <div className="form-group">
                                    <label> Password: </label>
                                    <input placeholder="Password" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changePasswordHandler} />
                                </div>

                                <button className="btn btn-success offset-md-4 " style={{
                                    height: 30, marginTop: 10, marginBottom: 10, paddingBottom: 30
                                }} onClick={this.saveAdmin}>Save </button>

                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancle</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateAdmin;