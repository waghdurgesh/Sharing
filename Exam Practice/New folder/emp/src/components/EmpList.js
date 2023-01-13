import { useState } from 'react';
import EmpCard from './EmpCard';
import EmpEdit from './EmpEdit';

const EmpList = (props) => {
    let [displayFlag,setflag]=useState(false);
    let [empobject,setEmpObject]=useState({empid:"",ename:"",sal:""}); 
    const editEmp2=(Obj)=>{
        setflag(true);
        setEmpObject({...Obj});
    }


    const deleteEmp2 = (id) => {
        props.deleteEmp3(id);//app.js
    }

    const renderList = () => props.employeelist.map((emp, index) => {
        return (
            <EmpCard key={emp.empid} employee={emp} deleteEmp1={deleteEmp2} editEmp1={editEmp2}></EmpCard>
        )
    })

    const updateEmp2=(id)=>{
        props.updateEmp3(id);//app.js
        setflag(false);
    }
    return (
        <div>
            <div>
                <h3>Employee List- </h3>
                {renderList()}
            </div>
            {displayFlag?(<div>
            <br></br>
            <EmpEdit employee={empobject} updateEmp1={updateEmp2}></EmpEdit>
            </div>):""}
        </div>
    )
}
export default EmpList;