import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import Jumbotron from "../../components/Jumbotron";
import SearchResults from "../../components/SearchResults"


class Search extends Component {

  state = {
    search: "",
    books: [],
    results: [],
    error: ""

  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {

    API.getBooks()
      .then(res => this.setState({ books: res.data.message }))
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
        debugger;
        this.setState({ results: res.data.items, error: "" }
        );

        console.log( this.state )


        console.log("It's good to know something works. API is working. Title: " + res.data.items[0].volumeInfo.title, + "Authors: " + res.data.items[0].volumeInfo.authors, res.data.items[0].volumeInfo.description, res.data.items[0].volumeInfo.imageLinks.thumbnail);

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
        <SearchResults
          results={this.state.results} />
      </div>
    );
  }
}

export default Search;
