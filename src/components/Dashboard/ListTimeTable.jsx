import React, { Component } from 'react';
import StudentService from '../../services/StudentService';
class ListTimeTable extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
                timetables: [],
         }
        // this.addStudent = this.addStudent.bind(this);
        // this.editStudent = this.editStudent.bind(this);
    }
    componentDidMount(){
        StudentService.getTimeTables().then((res) => {
                this.setState({timetables: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Time Table</h2>
                <div className="row">  
                </div>
                <div className="row">
                    <table className="table table-striped table-borderd table-j">
                    <thead>
                        <tr>
                           <th> Lecture Hall</th> 
                           <th> Lecture Timing</th> 
                           <th> Professor Name</th> 
                           <th> Subject</th> 
                        </tr>
                    </thead>

                    <tbody>

               
                        {
                            this.state.timetables.map(
                                timetable =>
                                    <tr key = {timetable.id}>
                                        <td> { timetable.hallNumber} </td>
                                        <td> {timetable.lecTiming}</td>
                                        <td> {timetable.professor}</td>
                                        <td> {timetable.subject}</td>
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

export default ListTimeTable;