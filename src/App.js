import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Search from './Views/Search';
import { useState, useEffect } from 'react';
import * as BooksAPI from './BooksAPI';


/**
 * 'App()' handles and holds the state of the users bookshelf and the status of their book collection.
 * 'App()' also handles the Routes of this app.
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

    /**
     * State Variables.
     *
     * 'books' holds the book objects fetched from "BooksAPI.js".
     * 'isLoading' is Boolean used to trigger communications with "BooksAPI.js" within 'useEffect'.
     */
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = React.useState(true);


    /**
     * 'useEffect' Hook.
     *
     * When 'isLoading' is set 'true' a getAll call will update the books object state from the "BooksAPI.js".
     */
    useEffect(() => {
        if (isLoading) {
            BooksAPI.getAll().then((result) => {
                setBooks(result)
                setIsLoading(false)
            })
        }
    });


    /**
     * 'updatedShelf' calls "BooksAPI.js" and preforms a 'PUT' call, updating the shelf of each book in the collection and
     * its shelf.
     *
     * @param book
     * @param shelf
     */

    const updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            setIsLoading(true)
        })
    }


    /**
     * 'BrowserRouter', 'Routes', and 'Route' are used to control which elements with which props
     * are rendered. This with the use of 'useNavigate' in "Home.js" and "Search.js" allows for
     * the 'Back' button within the browser.
     */
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home books={books} updatedShelf={updateShelf}  />} />
                    <Route exact path="/search" element={<Search books={books} updatedShelf={updateShelf} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
