import React from "react";
import { Link } from "react-router-dom";
class EmployeeView extends React.Component {
    constructor(props) {
        console.log("inside function view")
        super(props);
        this.state = {
            empid: this.props.match.params.id,
            emp: this.props.location.state.emp
        }
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-2">
                    <h1>View Employee</h1>
                    <div className="card-body">
                        <div className="row">
                            <label>Employee Id :  </label>
                            <div>{this.state.emp.empid}</div>
                        </div>
                        <div className="row">
                            <label>Employee Name :  </label>
                            <div>{this.state.emp.ename}</div>
                        </div>
                        <div className="row">
                            <label>Employee Salary :  </label>
                            <div>{this.state.emp.sal}</div>
                        </div>
                        <div className="row">
                            <Link to="/">
                                <button type="button" className="btn btn-primary">Go to main Page</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default EmployeeView;