import React from 'react';
import * as BooksAPI from './../BooksAPI';
import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import updatedShelf from '../App'



function Search(props){

    /**
     * State Variables.
     *
     * "search" holds the search term the user has inputted into search bar. Initialized as an empty string.
     * "books" holds the search results retrieved from the "BooksAPI.js". Initialized as an empty object.
     */
    const [search , setSearch] = useState('');
    const [books, setBooks] = useState([]);


    /**
     *
     */
    useEffect(() => {
        if (search.length > 0){
            const results = Promise.resolve(BooksAPI.search(search));
            results.then(function(result){
                setBooks(result);
                console.log("Search.js-useEffect-books", books)
            })
        } else {
            setBooks([])
        }
    }, [search])

    /**
     * Since this is React Router 6 and not React Router 5, I was unable to use the "useHistory" Hook.
     * React Router 6 uses the "useNavigate" Hook.
     *
     * The "useNavigate" Hook can take up to 2 arguments.
     * 1: Where you want to go. Can be a place (ie "/search") or a number (ie "navigate(-1) to go back a page).
     * 2: OPTIONAL. It lets you provide some options. For example: navigate(‘/login’, {replace: true}).
     *
     * @type {NavigateFunction}
     */
    const navigate = useNavigate();

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <button className="close-search" onClick={() => navigate('/')}>Close</button>
                <div className="search-books-input-wrapper">
                    {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
                    <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by title or author"/>

                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        books.length > 0 && search.length > 0 ?
                            books
                                .filter((book) => book.hasOwnProperty('imageLinks'))
                                .map(book => {
                                    props.books.map(b => book.id === b.id && (book.shelf = b.shelf) );
                                    return (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={book.shelf} onChange={e => props.render(book, e.target.value)}>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading" >Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none" selected>None</option>
                                                        </select>
                                                        {updatedShelf}
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.authors}</div>
                                            </div>
                                        </li>
                                    )
                                }) : ''}
                </ol>
            </div>
        </div>
    )
}
export default Search;