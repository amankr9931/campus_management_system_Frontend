import React, { Component } from 'react';

class OperationsAdmin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // student: this.props.history.location.state[0]
        };
      
    }

    redirectToAllStudent = (e) => {
        e.preventDefault();
        this.props.history.push('/students');
    }
    redirectToNotice = (e) => {
        e.preventDefault();
        this.props.history.push('/notice');
    }
    redirectToFeedback = (e) => {
        e.preventDefault();
        this.props.history.push('/student-feedback');
    }

    render() {
        return (
            <div>
                {/* <h1>Welcome to Admin Operations page.. </h1>
                <h1></h1>
                <button className="btn btn-success" onClick={this.redirectToAllStudent}>All Student details </button>
                 */}

                <div className="row shadow p-3 mb-5 bg-white rounded">
<h2 className="text-center ">Admin Dashboard</h2>
                </div>
                <div>
                <div class="container-a">
                        

                    

                        <div class="jay m-4 ">
                            <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                                <div>
                                    <img  class="asd"src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{height:300, width:300}}/>
                                </div>
                                <div class="card_back card_cont">
                                <button className="btn btn-dark btn-outline-warning m-1" onClick={this.redirectToAllStudent} style={{ marginLeft: 150 }}>Update-Delete-View-Student </button>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="jay m-4">
                            <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                                <div>
                                <img class="asd" src="https://web.mlscn.gov.ng/wp-content/uploads/2020/05/notice.png" style={{height:300, width:300}}/>
                                </div>
                                <div class="card_back card_cont">
                                <button className="btn btn-dark btn-outline-warning m-1" onClick={this.redirectToNotice} style={{ marginLeft: 150 }}>Add Notice </button>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="jay m-4">
                            <div class="card flip-card p-5 align-center shadow p-3 mb-5 bg-white rounded">
                                <div>
                              
                                    <img class="asd" src="https://images.hiverhq.com/blog/wp-content/uploads/2017/04/tr:pr-true/Customer-feedback-1-1.jpg" style={{height:300, width:300}}/>
                                </div>
                                <div class="card_back card_cont">
                                <button className="btn btn-dark btn-outline-warning m-1" onClick={this.redirectToFeedback} style={{ marginLeft: 150 }}>View Student Feedbacks </button>
                                   
                                </div>
                            </div>
                        </div>
                       

                </div>
                </div>
                

            </div>
        );
    }
}

export default OperationsAdmin;