import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Home from './Components/Home';
import Editor from './Components/Editor';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import AddQ from './Components/AddQ';
import QuestionsUser from './Components/QuestionsUser';
import "./style.css"
import { Authentication } from './utils/Authentication';

function App() {
  return (
    <div className="App">
    <NavBar/>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/questions" element={Authentication(<QuestionsUser/>)} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={Authentication(<Dashboard/>)} />
        <Route path="/addQ" element={Authentication(<AddQ/>)} />
        <Route path='/Question/:uniquename' element={Authentication(<Editor/>)} />    
      </Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
