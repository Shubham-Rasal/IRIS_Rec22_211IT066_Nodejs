import React from 'react';
import First from './components/First';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import Newform from './components/dashboard/Newform';
import "./app.css"


function App() {
  return (
    <div className="App">
       <Router>
                <Routes>
                    <Route exact path="/" element={<First/>}/>
                    <Route  path="/login" element={<Login/>}/>
                    <Route  path="/register" element={<Register/>}/>
                    <Route  path="/dashboard" element={<Dashboard auth={false}/>}/>
                    <Route  path="/dashboard/newform" element={<Newform/>}/>
                 

                    
                </Routes>
            </Router>

  
    </div>
  );
}

export default App;
