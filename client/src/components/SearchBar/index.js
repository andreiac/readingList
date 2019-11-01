import React from "react";
import "./style.css"


function SearchBar({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 80, textAlign: "center" }}
      className="jumbotron"
    >
              {children}

    <form className="search">
    <div className="form-group">
    
    <input
            value={children.search}
            type="text"
            className="form-control"
            placeholder="Type in a book name to begin"
            id="book"
          />
          <button type="submit" className="btn btn-success">
            Search
          </button>
    </div>
    </form>
 </div>

  );
}

export default SearchBar;

