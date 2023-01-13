import './Icon.css'
import './Row.css'
import { PenFill, PersonCircle, Trash } from 'react-bootstrap-icons';

const EmpCard = (props) => {

    const deleteEmp=(id)=>{
        props.deleteEmp1(id);//emplist
    }

    const editEmp=(employee)=>{
        props.editEmp1(employee);//emplist
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-1" name="icon" id="circle">
                    <PersonCircle></PersonCircle>
                </div>
                <div class="col-md-7">
                    <span>{props.employee.empid}</span>&nbsp;&nbsp;
                    <span>{props.employee.ename}</span>&nbsp;&nbsp;
                    <span>{props.employee.sal}</span>&nbsp;&nbsp;
                </div>
                <div class="col-md-2" name="icon" onClick={()=>{editEmp(props.employee)}}>
                    <PenFill></PenFill>
                </div>
                <div class="col-md-2" name="icon" onClick={()=>{deleteEmp(props.employee.empid)}}>
                    <Trash ></Trash>
                </div>
            </div>
        </div>
    )

}
export default EmpCard;