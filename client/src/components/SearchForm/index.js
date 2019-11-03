import React from "react";
import "./style.css"

function SearchForm(props) {
    return(
        <div id="searchContainer" className="justify-content-md-center">
            
            <form id="bookSearch" >
                <input type="text"  value={props.search}
          onChange={props.handleInputChange}name="bookSearch" id="searchTerm" form="bookSearch"           list="books"
placeholder="Book Title" required/>
                <button id="submitButton" type="submit" onClick={props.handleFormSubmit}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;
