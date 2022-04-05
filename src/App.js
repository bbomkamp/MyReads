import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Views/Home';
import Search from './Views/Search';
import { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';



function App() {

/**
 * State Variable
 * 
 * Holds the books fetched from BooksAPI.js
 */
 const [books, setBooks] = useState([]);

/**
 * 
 * @param {*} book 
 * @param {*} shelf 
 */
 const updateAPI = (book, shelf) => {
  BooksAPI.update(book, shelf);
};

/**
 * 
 */
useEffect(() => {
  BooksAPI.getAll().then((result) => {
      setBooks(result)
  })
}, [books]);



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
