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
     * "books" holds the book objects fetched from BooksAPI.js
     * "isLoading" is Boolean used to trigger communications with BooksAPI.js within useEffect
     */
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = React.useState(true);



    /**
     * useEffect Hook
     *
     * When "isLoading" is set 'true' a getAll call will update the books object state from the BooksAPI.js
     */
    useEffect(() => {
        if (isLoading){
            BooksAPI.getAll().then((result) => {
                setBooks(result)
                console.log("Debug", books)
                setIsLoading(false)
            })}
    }, );


    const updatedShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            setIsLoading(true)
        })}


    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home books ={books} render = {(book,shelf) => updatedShelf(book,shelf)}/>} />
                    <Route exact path="search" element={<Search />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;
