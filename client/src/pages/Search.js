import React from "react";
import { Col, Row, Container } from "../components/Grid";
import SearchBar from "../components/SearchBar";


function Search() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          
          <SearchBar >
          <h1>Find your book!</h1>

          

          </SearchBar>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
