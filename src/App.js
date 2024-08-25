import './App.css';
import React from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './component/Home/index.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
