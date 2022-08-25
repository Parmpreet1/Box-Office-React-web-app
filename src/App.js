import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

import { Starred } from './pages/Starred';


function App() {
  return (
 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<h1>This is wrong path</h1>}/>
      <Route path="/starred" element={<Starred/>}></Route>
    </Routes>
    
  );
}

export default App;
