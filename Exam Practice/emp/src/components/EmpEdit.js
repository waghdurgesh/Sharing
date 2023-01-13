import { useState } from "react";
import './EmpEdit.css'

const EmpEdit = (props) => {
    let [empobject, setEmpObject] = useState(props.employee)
    const handleChange = (event) => {

        const { name, value } = event.target
        setEmpObject({ ...empobject, [name]: value })
    }
    const updateEmp=()=>{
        props.updateEmp1(empobject);//emplist
        setEmpObject({empid:"",ename:"",sal:""});
    }



    return (
        <div class="editform">
            <form>
                <div class="empeditform">
                    <label for="empid">Employee Id</label>
                    <input type="text" class="form-control" id="empid" name="empid"
                        value={empobject.empid}
                        onChange={handleChange}
                        placeholder="Enter ID" />

                </div>
                <div class="empeditform">
                    <label for="ename">Employee Name</label>
                    <input type="text" class="form-control" id="ename" name="ename"
                        value={empobject.ename}
                        onChange={handleChange}
                        placeholder="Enter Name" />

                </div>
                <div class="empeditform">
                    <label for="sal">Salary</label>
                    <input type="text" class="form-control" id="sal" name="sal"
                        value={empobject.sal}
                        onChange={handleChange}
                        placeholder="Enter Salary" />

                </div>
                <br></br>
                <button type="SUBMIT" class="btn btn-primary" onClick={updateEmp}>Update Employee Details</button>
            </form>
        </div>
    )

}

export default EmpEdit;