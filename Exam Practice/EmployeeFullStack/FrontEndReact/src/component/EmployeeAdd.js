import React from "react";
import {Form,Button} from "react-bootstrap";
import EmployeeService from "./EmployeeService";
class EmployeeAdd extends React.Component{
    constructor(props){
        super(props);
        this.state={
            op:this.props.match.params.id,
            empid:"",
            ename:"",
            sal:""
        }
    }

    componentDidMount(){
      if(this.state.op === "_add"){
        return;
      }
      else{
        EmployeeService.getbyid(this.state.op).then((response)=>{
          let empob = response.data[0];
          this.setState({empid:empob.empid,ename:empob.ename,sal:empob.sal})
        })
      }
    }

    addorupdate=(event)=>{
   event.preventDefault();
   console.log(this.state.op);
   let emp ={empid:this.state.empid,ename:this.state.ename,sal:this.state.sal}
   if(this.state.op === '_add'){
    EmployeeService.addEmployee(emp).then((result)=>{
      console.log(result.data);
      this.props.history.push("/");
    })
   }
   else{
    EmployeeService.updateEmployee(emp).then((result)=>{
      this.props.history.push("/");
    }).catch((err)=>{
      console.log("errror occured"+err);
    })
   }
    }

    render(){
          return( <Form>
              <Form.Group className="mb-3" controlId="formBasicEmpid">
                <Form.Label>Empid</Form.Label>
                <Form.Control type="text" placeholder="Enter empid" value={this.state.empid}
                onChange={(event)=>this.setState({empid:event.target.value})} defaultChecked="form"/>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicEname">
                <Form.Label>Ename</Form.Label>
                <Form.Control type="text" placeholder="Ename" value={this.state.ename}
                 onChange={(event)=>this.setState({ename:event.target.value})}/>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicSal">
                <Form.Label>Sal</Form.Label>
                <Form.Control type="text" placeholder="Sal" value={this.state.sal}
                 onChange={(event)=>this.setState({sal:event.target.value})}/>
              </Form.Group>
              
              <Button variant="primary" type="submit" onClick={this.addorupdate}>
                Submit
              </Button>
            </Form>)
          
        }

}
export default EmployeeAdd;