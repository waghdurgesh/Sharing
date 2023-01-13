import 'bootstrap/dist/css/bootstrap.min.css';
import EmpList from './components/EmpList';
import EmpAdd from './components/EmpAdd';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  let [emparr, setemparr] = useState([
    { empid: "1", ename: "Aniket", sal: "12500" },
    { empid: "2", ename: "Kunal", sal: "25000" },
    { empid: "3", ename: "Pritam", sal: "45000" },
    { empid: "4", ename: "Sid", sal: "50000" },
    { empid: "5", ename: "Sourav", sal: "60000" },
    { empid: "6", ename: "Tanmay", sal: "75220" },
    { empid: "7", ename: "Yash", sal: "23569" },
    { empid: "8", ename: "Siri", sal: "56823" },

  ])
  const insertEmp = (Obj) => {
    setemparr([...emparr, { ...Obj }]);
  }
  const deleteEmp4 = (id) => {
    let newarr = emparr.filter(Obj => Obj.empid !== id);
    setemparr(newarr);
  }
  const updateEmp4=(Obj)=>{
    let newarr=emparr.map(emp=>emp.empid===Obj.empid?{...Obj}:{...emp})
    setemparr(newarr);
  }


  return (
    <div>
      <Header></Header>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <EmpAdd addEmp={insertEmp}></EmpAdd>
          </div>
          <div class="col-sm-12 col-md-6">
            <EmpList employeelist={emparr} deleteEmp3={deleteEmp4} updateEmp3={updateEmp4}></EmpList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
