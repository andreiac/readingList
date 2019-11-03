import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

function Header(props) {
    return (
      <div className="card">
        <ul className="nav justify-content-start">
  <li className="nav-item">
    <Link to="/" className="nav-link active">Search</Link>
  </li>
  <li className="nav-item">
  <Link to="/saved" className="nav-link ">Saved</Link>
  </li>
</ul>
      </div>
    );
  }
  
  export default Header;


  


