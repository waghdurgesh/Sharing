import 'bootstrap/dist/css/bootstrap.min.css';
import Displaylist from './components/Displaylist';
import Insertform from './components/Insertform';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Routes>
              <Route path="/" exact element={<Displaylist />} />
            
              <Route path="/addstud" element={<Insertform />} />
            </Routes>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App;
