import axios from "axios"
const base_url = 'http://localhost:4000/';
class EmployeeService{
    getEmployees(){
      return axios.get(base_url+"employee")
    }
    addEmployee(emp){
      return axios.post(base_url+"employee",emp,{
        headers:{
          'Content-Type':'application/json'
    }})}

    deleteemp(empid){
     // this.props.history.push("/");
      return axios.delete(base_url+"employee/"+empid)
    }

    getbyid(empid){
      return axios.get(base_url+"employee/"+empid);
    }

    updateEmployee(emp){
      return axios.put(base_url+"employee/"+emp.empid,emp,{
        headers:{
          'Content-Type':'application/json'
        }
      })
    }
}

export default new EmployeeService();