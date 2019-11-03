import axios from "axios";

export default {
  getBooks: function (title) {
    return axios.get("https://www.google.com/search?tbm=bks&q="+title);
    
  },
  getSavedBooks: function () {
    return axios.get("/api/savedBooks");
  },
  saveBook: function (bookData) {
    return axios.post("/api/savedBooks", bookData);
  },
  deleteSavedBook: function (googleId) {
    return axios.delete(`/api/savedBooks/${googleId}`);
  }
};