import Service_axios from './Service_axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {PenFill, PersonCircle,Trash} from 'react-bootstrap-icons';

const Displaylist = () => {
    let [studentarr, setstudentarr] = useState([]);
    let [flag,setflag]=useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        Service_axios.displaylist().then((response) => {
            console.log("in useffect of displaylist initialization");
            setstudentarr(response.data);
        })
            .catch((err) => {
                console.log("Error In Display", err)
            })
    }, []);
    useEffect(() => {
        Service_axios.displaylist().then((response) => {
            console.log("in useffect of displaylist initialization");
            setstudentarr(response.data);
        })
            .catch((err) => {
                console.log("Error In Display", err)
            })
    }, [flag]);

const DeleteStudent=(id)=>{
   
    Service_axios.deletelist(id).then((response)=>{
        console.log("Inside DeleteStudent");
        alert("Deleted Succcesfully!");
        setflag(true);

    }).catch((err)=>{
        console.log("Error In Delete", err)
    })
}
    const renderList = () => {
        return studentarr.map((std) => <tr key={std.roll_no}>
            <td>{std.roll_no}</td>
            <td>{std.name}</td>
            <td>{std.course}</td>
            <td>{std.birthdate}</td>
            <td>{std.marks}</td>
            <td>{std.phone}</td>
            <td><button class="ops" type="button" name='btn' id="edit" ><PenFill /></button>
            <button class="ops" type="button" name='btn' id="delete" onClick={() => DeleteStudent(std.roll_no)}><Trash /></button>
            </td>
        </tr>)
        
    }
    return (
        <div className='col-sm-12'>
            <h1>Student Details</h1>
            <table border="2px">
                <thead>
                    <tr>
                        <th>Roll No.</th>
                        <th>Student Name</th>
                        <th>Course</th>
                        <th>DOA</th>
                        <th>Marks</th>
                        <th>Phone No.</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
            <br></br>
            <Link to="/addstud">
                <button type="button" className="btn btn-info" name="btn" id="view">Insert New Student Details</button>
            </Link>
        </div>
    )
}
export default Displaylist;