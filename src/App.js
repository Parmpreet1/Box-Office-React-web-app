import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Show } from './pages/Show';

import { Starred } from './pages/Starred';
import {ThemeProvider} from 'styled-components'
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  }
}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/starred" element={<Starred/>}></Route>
      <Route path='/show/:id' element={<Show/>} ></Route>
      <Route path='*' element={<h1>This is wrong path</h1>}/>
    </Routes>
    </ThemeProvider>
  );
}

export default App;
