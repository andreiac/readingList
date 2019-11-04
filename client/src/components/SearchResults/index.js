import React from "react";

import "./style.css";


function SearchResults(props) {
  console.log('props into SearchRes:',props)
  
  if( props.results ){
  return (
    <span>
    <ul className="list-group search-results">
      {props.results.map(book => (
        <li key={book.id} className="list-group-item">
          <img alt="book" src={book.volumeInfo.imageLinks.thumbnail} className="img-fluid" />
          <p>{book.volumeInfo.title}</p>
          <p>{book.volumeInfo.authors}</p>
          <p>Check it out! <a href={book.volumeInfo.previewLink}>{book.volumeInfo.previewLink}</a></p>

        </li>

      ))}
    </ul>
    </span>
  );
      } else { return <div>no props</div> }
}

export default SearchResults;
