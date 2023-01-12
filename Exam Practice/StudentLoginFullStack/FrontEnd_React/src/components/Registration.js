import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service_axios from "./Service_axios";

const Insertform = () => {
  const [studarr, setstarr] = useState({ roll_no: "", name: "", course: "", birthdate: "", marks: "", phone: "" });
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target
    setstarr({ ...studarr, [name]: value })
  }

  const InsertDetails = () => {
    if (studarr.roll_no === "" || studarr.name === "" || studarr.course === "" || studarr.birthdate === "" || studarr.marks === "" || studarr.phone === "") {
      alert("Fill All Details!")
    } else {
      Service_axios.insertlist(studarr)
        .then((result) => {
          console.log(result.data);
          alert("Inserted Succcesfully!");
          navigate("/");
          setstarr({ roll_no: "", name: "", course: "", birthdate: "", marks: "", phone: "" });
        }).catch((err) => {
          console.log(err);
        })
    }
  }

  return (
    <div>
      <h2 style={{ color: 'red' }}>Insert Student Information</h2>
      <form>
        <div class="form-group" style={{ display: 'inline-block' }} className="col-sm-4">
          <label htmlFor="roll_no">Roll No</label>
        </div>
        <div style={{ display: 'inline-block' }} className="col-sm-6">
          <input type="number" class="form-control" id="roll_no" placeholder="Select/ Enter Roll No" min={0} max={500}
            value={studarr.roll_no}
            name="roll_no"
            onChange={handleChange} ></input>
        </div>
        <div class="form-group" style={{ display: 'inline-block' }} className="col-sm-4">
          <label htmlFor="name">Student Name</label>
        </div>
        <div style={{ display: 'inline-block' }} className="col-sm-6">
          <input type="text" class="form-control" id="name" placeholder="Enter Student Name"
            value={studarr.name} name="name" onChange={handleChange} ></input>
        </div>
        <div class="form-group" style={{ display: 'inline-block' }} className="col-sm-4">
          <label htmlFor="course">Course</label>
        </div>
        <div style={{ display: 'inline-block' }} className="col-sm-6">
          <input type="text" class="form-control" id="course" placeholder="Enter Course Name"
            value={studarr.course} name="course" onChange={handleChange} ></input>
        </div>
        <div class="form-group" style={{ display: 'inline-block' }} className="col-sm-4">
          <label htmlFor="birthdate">Admission Date</label>
        </div>
        <div style={{ display: 'inline-block' }} className="col-sm-6">
          <input type="date" class="form-control" id="birthdate" placeholder="Enter Date of admission"
            value={studarr.birthdate} name="birthdate" onChange={handleChange} ></input>
        </div>
        <div class="form-group" style={{ display: 'inline-block' }} className="col-sm-4">
          <label htmlFor="marks">Marks</label>
        </div>
        <div style={{ display: 'inline-block' }} className="col-sm-6">
          <input type="number" class="form-control" id="marks" placeholder="Select/ Enter Marks" min={0} max={100}
            value={studarr.marks} name="marks" onChange={handleChange} ></input>
        </div>
        <div class="form-group" style={{ display: 'inline-block' }} className="col-sm-4">
          <label htmlFor="phone">Phone Number</label>
        </div>
        <div style={{ display: 'inline-block' }} className="col-sm-6">
          <input type="number" name="phone" class="form-control" id="phone" placeholder="Enter Phone" min={0} max={9999999999}
            value={studarr.phone} onChange={handleChange} ></input>
        </div>
        <button type="button" class="btn btn-success" onClick={InsertDetails}>Insert Details</button>

      </form>
    </div>
  );
}
export default Insertform;