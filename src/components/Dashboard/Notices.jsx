import React, { Component } from 'react';
import StudentService from '../../services/StudentService';
class Notices extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
                notices: [],
         }
        // this.addStudent = this.addStudent.bind(this);
        // this.editStudent = this.editStudent.bind(this);
    }

    componentDidMount(){
        StudentService.getNotices().then((res) => {
                this.setState({notices: res.data});
        });
    }

   

    render() {
        return (
            <div className="back">
                
                <h2 className="text-center">Notices</h2>
                <div className="row">
                    <button className="btn btn-danger btn-outline-dark">Add Notice</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-borderd table-j">
                    <thead>
                        <tr>
                           <th> Type</th> 
                           <th> Description</th>           
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.notices.map(
                                notice =>
                                    <tr key = {notice.id}>
                                        <td> {notice.type} </td>
                                        <td> {notice.description}</td>
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

export default Notices;
