import React from "react";
// import { Button } from "react-bootstrap";
import EmployeeService from "./EmployeeService";
import { Link } from "react-router-dom";
class EmployeeList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            emparr:[],
            serchemparr:[],
            flag:false,
            searchtext:""
        }
    }

    componentDidUpdate(prevprops,prevstate){

        if(this.state.flag){
            EmployeeService.getEmployees().then((response)=>{
                this.setState({emparr:response.data,serchemparr:response.data,flag:false})
            })
        }
         if(prevstate.searchtext !== this.state.searchtext){
            if(this.state.searchtext !== ""){
                this.setState({serchemparr:this.state.emparr.filter((emp)=>{
                    return emp.ename.includes(this.state.searchtext)
                })})
            }
            else{
                this.setState({serchemparr:this.state.emparr})
            }
         }
    }

    componentDidMount(){
        console.log("inside component did mount")
        EmployeeService.getEmployees().then((response)=>{
            this.setState({emparr:response.data,serchemparr:response.data})
        })
    };

    searchEmployee=()=>{
        console.log("inside search");
        if(this.state.searchtext !== ""){
            this.setState({serchemparr:this.state.emparr.filter((emp)=>{
                return emp.ename.includes(this.state.searchtext)
            })});
        }
        else{
            this.setState({serchemparr:this.state.emparr})
        }
    }

    addEmp=()=>{
        this.props.history.push("/add/_add");
    }

    delete=(empid)=>{
        console.log(empid);
        EmployeeService.deleteemp(empid).then((result)=>{
            console.log(result.data);
          this.setState({flag:true})
        })

    }

    edit=(empid)=>{
        // console.log(empid);
        // EmployeeService.editemployee(empid).then((result)=>{
        //     console.log(result.data);
        // })
        this.props.history.push(`add/${empid}`)
    }

    render(){
        return(
            <div>
                

                <h2 className="text-centre">Employee List</h2>
                <div className="row text-right">
                    <button className="btn btn-primary" onClick={this.addEmp}>Add Employee</button>
                </div>
                <div className="row col-md-6 offset-md-2">
                    <input type="text" name="search" placeholder="" value={this.state.searchtext}
                    onChange={(event)=>this.setState({searchtext:event.target.value})}></input>
                    <button className="btn btn-primary" onClick={this.searchEmployee}>search</button>
                </div>
                <div className="row">
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>Emp id</th>
                                <th>Emp name</th>
                                <th>Emp salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.serchemparr.map((emp,index)=>
                                <tr key={index}>
                                    <td>{emp.empid}</td>
                                    <td>{emp.ename}</td>
                                    <td>{emp.sal}</td>
                                    <td>
                                        {/* <Button variant="primary" type="submit" onClick={()=>this.delete(emp.empid)}>
                                      Delete Employee</Button>
                                      <Button variant="primary" type="submit" >
                                      Edit Employee</Button>
                                      <Button variant="primary" type="submit" >
                                      View Employee</Button> */}
                                      <button type="button" className="btn btn-danger" onClick={()=>{this.delete(emp.empid)}}>Delete</button>
                                      <Link to={{pathname:`/views/${emp.empid}`,state:{emp:emp}}}>
                                      <button type="button" className="btn btn-primary">View</button>
                                      </Link>
                                     
                                      <button type="button" className="btn btn-success" onClick={()=>{this.edit(emp.empid)}}>Edit</button>
                                      
                                      
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default EmployeeList;
