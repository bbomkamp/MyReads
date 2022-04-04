import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Views/Home';
import Search from './Views/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="search" element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
