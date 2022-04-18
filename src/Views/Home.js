import React from 'react';
import '../App.css';
import Book from "../Components/Book";
import Search from '../Components/SearchButton';




/**
 * 'BooksApp' returns the Home Page of this webapp. It contains three(3) shelves; "Currently Reading",
 * "Want to Read", and "Read". The user can move books from one shelf to another.
 *
 * The "SearchButton.js" component is implemented to change to a new route.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function BooksApp (props) {

    return (

        // Header
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            {/*Shelf. Currently Reading.*/}
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Book shelf = 'currentlyReading' books ={props.books} updatedShelf={(book,shelf) => props.updatedShelf(book,shelf)}/>
                            </ol>
                        </div>
                    </div>

                    {/*Shelf. Want To Read.*/}
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Book shelf = 'wantToRead' books ={props.books} updatedShelf={(book,shelf) => props.updatedShelf(book,shelf)}/>
                            </ol>
                        </div>
                    </div>

                    {/*Shelf. Read.*/}
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                <Book shelf = 'read' books ={props.books} updatedShelf={(book,shelf) => props.updatedShelf(book,shelf)}/>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/*Search Button*/}
            <Search books ={props.books}/>

        </div>
    )
}

export default BooksApp;
