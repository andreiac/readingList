import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">

    <h1 className="display-4">
    <span className="myBlueB">B</span>
    <span className="myRedO">o</span>
    <span className="myYellowO">o</span>
    <span className="myGreenK">k</span>
    <span className="myBlueS">s</span>
    <span className="myPurpleT">t</span>
    <span className="myPinkE">e</span>
    <span className="myYellowR">r</span>
    </h1>
    <p className="lead">Google Books' lesser known cousin.</p>
  </div>
</div>
  );
}

export default Jumbotron;

