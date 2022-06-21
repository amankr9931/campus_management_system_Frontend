import React, { Component } from 'react';
import StudentService from '../../services/StudentService';

class StudentFeedback extends Component {

constructor(props) {
        super(props)
        
        this.state = {
                feedbacks: [],
         }
        // this.addStudent = this.addStudent.bind(this);
        // this.editStudent = this.editStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getFeedback().then((res) => {
                this.setState({feedbacks: res.data});
        });
    }

    addFeedback = (e) => {
        e.preventDefault();
        this.props.history.push('/add-feedback');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Feedback</h2>
                <div className="row">  
                <button className="btn btn-primary" onClick={this.addFeedback}>Add feedback</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-borderd table-j">
                    <thead>
                        <tr>
                           <th> Student Name</th> 
                           <th> Email</th> 
                           <th> Messages</th>      
                        </tr>
                    </thead>

                    <tbody>

                    
                        {
                            this.state.feedbacks.map(
                                feedback =>
                                    <tr key = {feedback.id}>
                                        <td> {feedback.name} </td>
                                        <td> {feedback.email}</td>
                                        <td> {feedback.message}</td>
                                       
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

export default StudentFeedback;