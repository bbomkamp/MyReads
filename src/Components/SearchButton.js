import React from "react";
import {useNavigate} from "react-router-dom";
import '../App.css';

function SearchButton(){

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

    return(
        <div className="open-search">
            <button onClick={() => navigate('/search')}>Add a book</button>
        </div>
    )
}

export default SearchButton;