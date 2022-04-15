import React from 'react';
import * as BooksAPI from './../BooksAPI';
import { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Search(){

    /**
     * State Variables.
     *
     * "search" holds the search term the user has inputted into search bar. Initialized as an empty string.
     * "books" holds the search results retrieved from the "BooksAPI.js". Initialized as an empty object.
     */
    const [search , setSearch] = useState('');
    const [books, setBooks] = useState([]);


    /**
     * Since this is React Router 6 and not React Router 5, I was unable to use the "useHistory" Hook.
     * React Router 6 uses the "useNavigate" Hook.
     *
     * The "useNavigate" Hook can take up to 2 arguments.
     * 1: Where you want to go. Can be a place (ie "/search") or a number (ie "navigate(-1)).
     * 2: OPTIONAL. It lets you provide some options. For example: navigate(‘/login’, {replace: true}).
     *
     * @type {NavigateFunction}
     */
    const navigate = useNavigate();


    useEffect(() => {

            BooksAPI.getAll().then((result) => {
                setBooks(result)
                console.log("Search.JS useEffect", search)

            })
    },[search]);


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



          </ol>
        </div>
      </div>
    )
}
export default Search;