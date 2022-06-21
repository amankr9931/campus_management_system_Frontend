import React, { Component } from 'react';
import StudentService from '../../services/StudentService';

class AddFeedback extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeMessageHandler = this.changeMessageHandler.bind(this);
        this.saveFeedback = this.saveFeedback.bind(this);
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeMessageHandler = (event) => {
        this.setState({ message: event.target.value });
    }

    saveFeedback = (e) => {
        e.preventDefault();
        let feedback = { name: this.state.name,email: this.state.email, message: this.state.message}
        console.log('feedback =>' + JSON.stringify(feedback));

        StudentService.createFeedback(feedback).then(res =>{
            this.props.history.push('/student-feedback');
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
                        <h3 className="text-center">Add Feedback</h3>
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
                                    <label> Feedback: </label>
                                    <input placeholder="Feedback" name="password" className="form-control"
                                        value={this.state.password} onChange={this.changeMessageHandler} />
                                </div>

                                <button className="btn btn-success offset-md-4 " style={{
                                    height: 30, marginTop: 10, marginBottom: 10, paddingBottom: 30
                                }} onClick={this.saveFeedback}> Submit </button>

                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancle</button>


                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddFeedback;