import React from "react";
import "./style.css"

function SearchForm(props) {
    return (

        <div id="searchContainer" className="justify-content-md-center">

            <form id="bookSearch">
                <input
                    form="bookSearch"
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="book"
                    list="books"
                    type="text"
                    placeholder="Type in a book title to begin"
                    id="searchTerm"
                />

                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success" id="submitButton">
                    Search
        </button>
            </form>
        </div>

    );
}

export default SearchForm;
