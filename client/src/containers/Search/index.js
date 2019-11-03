import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import Jumbotron from "../../components/Jumbotron";
import SearchResults from "../../components/SearchResults"


class Search extends Component {
  state = {
    books: [],
    results: [],

  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleSearchClick = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        
        <Jumbotron></Jumbotron>
          
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleSearchClick={this.handleSearchClick}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
testing!
          <SearchResults results={this.state.results}>aljflkasjfk</SearchResults>
       
      </div>
    );
  }
}

export default Search;
