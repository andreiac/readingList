import React, { Component } from "react";
import API from "../../utils/API";
import BookCard from "../BookCard";

class BookList extends Component {
  state = {
    title: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ title: res.data.message }))
      .catch(err => console.log(err));
  }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

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
        <BookCard />
      </div>
    );
  }
}

export default BookList;
