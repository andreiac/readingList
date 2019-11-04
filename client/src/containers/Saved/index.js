import React, { Component } from "react";
// import API from "../../utils/API";



class Saved extends Component {
  state = {
   
  };

//   // When the component mounts, get a list of all available base breeds and update this.state.breeds
//   componentDidMount() {
//     this.loadBooks();
//   }

//   loadBooks = () => {
//     API.getBooks()
//       .then(res => this.setState({ books: res.data }))
//       .catch(err => console.log(err));
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     API.getDogsOfBreed(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
  render() {
    return (
      <div>
        
          <p>Well Crap. This will eventually work</p>
       
      </div>
    );
  }
}

export default Saved;
