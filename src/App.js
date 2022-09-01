import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Show } from './pages/Show';

import { Starred } from './pages/Starred';


function App() {
  return (
 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/starred" element={<Starred/>}></Route>
      <Route path='/show/:id' element={<Show/>} ></Route>
      <Route path='*' element={<h1>This is wrong path</h1>}/>
    </Routes>
    
  );
}

export default App;
