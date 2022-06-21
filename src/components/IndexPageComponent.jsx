import React, { Component } from 'react';
// import NavigationBar from './NavigationBar';

class IndexPageComponent extends Component {

constructor(props){
    super(props)
    this.addStudent = this.addStudent.bind(this);

}

// addStudent(id) {
//     // e.preventDefault();
//     // this.props.history.push(`/update-student/${id}`);
//     this.props.history.push(`/add-student/${id}`);
// }
addStudent = (e) => {
    e.preventDefault();
    this.props.history.push('/add-student/-1');
}

redirectToLogin = (e) => {
    e.preventDefault();
    this.props.history.push('/login-student');
}


redirectToAllStudent = (e) => {
    e.preventDefault();
    this.props.history.push('/students');
}

redirectToAdmin = (e) => {
    e.preventDefault();
    this.props.history.push('/login-admin');
}

    render() {
        return (
            <div className="background-main">
               {/* <NavigationBar/> */}
                <div className='main-view' >
                <h1>
                    Welcome to Campus Buddy                   
                </h1>
                <div className="login-signup">
                    <button className="btn btn-primary "  onClick={this.redirectToLogin}>Login</button>
                    &#9135;&#9135;&#9135;&#9135; or  &#9135;&#9135;&#9135;&#9135;
                    <button className="btn btn-primary "  onClick={this.addStudent} >Register</button>
                </div>
                    {/* <button className="btn btn-primary temp" onClick={this.redirectToAllStudent}>All Students</button> */}
                   
                </div>                    

                    {/* <div style={{marginTop:40}}>
                    <button className="btn btn-primary offset-md-3" onClick={this.redirectToAdmin}>Admin</button>
                    </div> */}
                    

                
            </div>
            
            
        );
    }
}

export default IndexPageComponent;