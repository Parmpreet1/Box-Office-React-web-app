import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from "./component/home";

function App() {
  return (<>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<h1>This is wrong path</h1>}/>
    </Routes>
    </>
  );
}

export default App;
