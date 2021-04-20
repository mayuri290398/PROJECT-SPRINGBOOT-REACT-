import StudentServices from './StudentServices';
import React, { Component } from 'react';

   
    
    class ListStudentComponent extends Component {
        constructor(){
            super();
            this.state = {
                students:[]
            }
        }
        componentDidMount(){
            StudentServices.getStudents().then((res)=>
            {
                this.setState({students: res.data});
            }
            );
        }
        render() {
            return (
                <div>
                    <h2 className="text-center">STUDENT DATABASE </h2>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                <tr><th>STUDENT FIRST NAME</th>
                                     <th>STUDENT LAST NAME</th>
                                     <th>STUDENT EMAIL ID</th>
                                     <th>STUDENT DEPARTMENT</th>
                                     <th>STUDENT CITY</th>
                                     </tr>
                            </tbody>
                            <tbody>
                                {
                                    this.state.students.map (
                                        students=>
                                        <tr key={students.id}>
                                        <td>{students.firstName}</td>
                                        <td>{students.lastName}</td>
                                        <td>{students.emailId}</td>
                                        <td>{students.department}</td>
                                        <td>{students.city}</td>
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
    
    export default ListStudentComponent;
