import React, { Component } from 'react';

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            student: this.props.history.location.state[0]
        };
        this.logOut = this.logOut.bind(this);
        //   console.log(props);
    }

    logOut = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }
    // ______________________________________ ye same dashbord ki tarah lega sabh or show karega______________
    yourProfile = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }
    // ___________________________________________________________________________
    // __________________________________________________
    academics = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }
    holidays = (e) => {
        e.preventDefault();
        this.props.history.push('/holiday');
    }
    // ___________________________________________________________________________
    // ___________________________________________________________________________

    timetable = (e) => {
        e.preventDefault();
        this.props.history.push('/timetable');
    }

    feedback = (e) => {
        e.preventDefault();
        this.props.history.push('/student-feedback');
    }
    notice = (e) => {
        e.preventDefault();
        this.props.history.push('/notice');
    }
    // ___________________________________________________________________________


    componentDidMount() {
        // this.setState({student:this.props.history.location.state[0]})
        // console.log(this.props.history.location.state[0]);
        console.log(this.state.student);
    }

    render() {

        return (
            <div >
                <h2 className="text-center ">Dashboard</h2>
                <div className="row ">
                </div>
                <div className="row shadow p-3 mb-5 bg-white rounded">
                    <table className="table table-striped table-borderd table-j">
                        <thead>
                            <tr>
                                <th> First Name</th>
                                <th> Last Name</th>
                                <th> Email</th>
                                <th> Enrollment</th>
                                <th> Branch</th>
                                <th> Semester</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr>
                                    <td>{this.state.student.firstName}</td>
                                    <td>{this.state.student.lastName}</td>
                                    <td>{this.state.student.emailId}</td>
                                    <td>{this.state.student.enrollment}</td>
                                    <td>{this.state.student.branch}</td>
                                    <td>{this.state.student.sem}</td>
                                    <td><button className="btn btn-dark " onClick={this.yourProfile} >Edit Profile </button></td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                {/* <div className="dashbody"><h1>jayesh</h1></div> */}
                {/* <div style={{ marginTop: 10, backgroundColor: 'darkgrey', height: 100, paddingTop: 30 }}>

                    <button className="btn btn-dark" onClick={this.timetable} style={{ marginLeft: 150 }}>Time Table </button>
                    <button className="btn btn-dark" onClick={this.holidays} style={{ marginLeft: 150 }}>Holidays </button>
                    <button className="btn btn-dark" onClick={this.feedback} style={{ marginLeft: 150 }}>Feedback </button>
                    <button className="btn btn-dark" onClick={this.notice} style={{ marginLeft: 150 }}>Notices </button>
                </div> */}
                <section>

                    <div class="container-a">
                        

                    

                            <div class="jay m-3 ">
                                <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                                    <div>
                                        <img  class="asd"src="https://dmer.haryana.gov.in/assets/site/images/Calendar.jpg"/>
                                    </div>
                                    <div class="card_back card_cont">
                                    <button className="btn btn-dark  m-1" onClick={this.timetable} style={{ marginLeft: 150 }}>Time Table </button>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="jay m-3">
                                <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                                    <div>
                                        <img class="asd" src="https://banner2.cleanpng.com/20181208/wy/kisspng-christmas-tree-christmas-day-christmas-card-christ-library1-easyfab-5c0bbb99b3aa59.6793172715442727937359.jpg"/>
                                    </div>
                                    <div class="card_back card_cont">
                                    <button className="btn btn-dark  m-1" onClick={this.holidays} style={{ marginLeft: 150 }}>Holidays </button>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="jay m-3">
                                <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                                    <div>
                                        <img class="asd" src="https://www.nicepng.com/png/detail/83-839666_feedback-comments-feedback-free-icon-png.png"/>
                                    </div>
                                    <div class="card_back card_cont">
                                    <button className="btn btn-dark  m-1" onClick={this.feedback} style={{ marginLeft: 150 }}>Feedback </button>
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="jay m-3">
                                <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                                    <div>
                                        <img class="asd" src="https://www.pngall.com/wp-content/uploads/2016/07/Advertising-PNG-Clipart.png"/>
                                    </div>
                                    <div class="card_back card_cont">
                                    <button className="btn btn-dark  m-1" onClick={this.notice} style={{ marginLeft: 150 }}>Notices </button>
                                       
                                    </div>
                                </div>
                            </div>

                    </div>




                </section>



            </div>

        );

    }
}

export default Dashboard;