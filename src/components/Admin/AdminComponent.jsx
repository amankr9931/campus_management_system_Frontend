import React, { Component } from 'react';


class AdminComponent extends Component {

    addAdmin = (e) => {
    e.preventDefault();
    this.props.history.push('/add-admin');
    }

    redirectToLogin = (e) =>{
        e.preventDefault();
    this.props.history.push('/login-admin');
    }

    redirectToAllAdmin = (e) =>{
        e.preventDefault();
        this.props.history.push('/list-admin');
    }


    render() {
        return (
            <div>
                <h1>Muskuraiye App Admin page me hai</h1>
                <button className="btn btn-primary offset-md-1 " onClick={this.addAdmin} >Register Admin</button>
                <button className="btn btn-primary offset-md-1" onClick={this.redirectToLogin}>Login Admin</button>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                {/* <button className="btn btn-dark" onClick={this.redirectToAllAdmin}>All Admins</button> */}
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            </div>
        );
    }
}

export default AdminComponent;