import React from "react";
import Display from "./Display";
import Login from "./Login";
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
      
    <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Display/>}/>
    </Routes>       
  );
}

export default App;
