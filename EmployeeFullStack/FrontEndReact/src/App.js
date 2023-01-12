
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
//import EmployeeList from './component/EmployeeList';
import EmployeeList from './component/EmployeeList';
import EmployeeAdd from './component/EmployeeAdd';
import EmployeeView from './component/EmployeeView';
function App() {
  return (
    <div className="App">
      {/* <h1>Hiiiiiiiiiii</h1> */}
        <Router> 
        <Switch>
          <Route path="/" exact render={(props)=>(<EmployeeList {...props}></EmployeeList>)}>
                 </Route>
          <Route path="/add/:id" exact render={(props)=>(<EmployeeAdd {...props}></EmployeeAdd>)}>
                 </Route>  
          <Route path="/views/:empid" exact render={(props)=>(<EmployeeView {...props}></EmployeeView>)}>
                 </Route>           
        </Switch>
       </Router>  
    </div>
  );
}

export default App;
