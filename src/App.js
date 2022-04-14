import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Views/Home';
import Search from './Views/Search';
import { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';



function App() {

    /**
     * State Variables
     *
     * "books" holds the book information fetched from BooksAPI.js
     * "isLoading" is Boolean used to trigger retrieval from BooksAPI.js
     */
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = React.useState(true);



    /**
     *
     */
    useEffect(() => {

        if (isLoading){
            BooksAPI.getAll().then((result) => {
                setBooks(result)
                console.log("Debug", books)
                setIsLoading(false)
            })}
    }, );




    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home books={books} />}/>
                    <Route exact path="search" element={<Search />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
