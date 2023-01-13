import './EmpAdd.css'
import { useState } from 'react';
const EmpAdd = (props) => {

    let [empobject, setEmpObject] = useState({ empid: "", ename: "", sal: "" });

    const handleChange = (event) => {
        const { name, value } = event.target
        setEmpObject({ ...empobject, [name]: value })

    };

    const insertDataAdd = (event) => {
        event.preventDefault(); // for submit button only
        if (empobject.empid === "" || empobject.ename === "" || empobject.sal === "") {
            alert("Insert All Values!")
            return;
        }
        props.addEmp(empobject);
        setEmpObject({ empid: "", ename: "", sal: "" });
    }

    return (
        <div class="formdiv">
            <form>
                <div class="empform">
                    <label for="empid">Employee Id</label>
                    <input type="text" class="form-control" id="empid" name="empid"
                     value={empobject.empid}
                        onChange={handleChange}
                        placeholder="Enter ID"/>

                </div>
                <div class="empform">
                    <label for="ename">Employee Name</label>
                    <input type="text" class="form-control" id="ename" name="ename"
                    value={empobject.ename}
                        onChange={handleChange}
                        placeholder="Enter Name"/>

                </div>
                <div class="empform">
                    <label for="sal">Salary</label>
                    <input type="text" class="form-control" id="sal" name="sal"
                        value={empobject.sal}
                        onChange={handleChange}
                        placeholder="Enter Salary" />

                </div>
                <br></br>
                <button type="SUBMIT" class="btn btn-primary" onClick={insertDataAdd}>Insert Details</button>
            </form>
        </div>
    )
}

export default EmpAdd;