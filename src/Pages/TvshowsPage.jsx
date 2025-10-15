import React from 'react'
import Shows from '../Components/shows'
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import Pages from '../Components/Pages';
import { FaSearch } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Search from '../Components/Search';
import Breadcrumbs from '../Components/Breadcrumbs';


const TvshowsPage = () => {
  return (
     <div>
        <div className="search-exp text-white" style={{ backgroundColor: "#020d18" }}>
      <Container className="d-flex justify-content-between align-items-center border border-secondary border-start-0 ">
        <p className="mb-0">
          Found <span className="text-primary fw-bold">1,608</span> movies in total
        </p>
        <div className="d-flex align-items-center ">
          <label htmlFor="sortSelect" className="mb-0">Sort by:</label>
          <Form.Select
            id="sortSelect"
            size="sm"
            className="bg-dark text-white"
            style={{ minWidth: "180px" }}
          >
            <option>Popularity Descending</option>
            <option>Popularity Ascending</option>
            <option>Rating Descending</option>
            <option>Rating Ascending</option>
          </Form.Select>
        </div>
      </Container>
    </div>
      
  <Shows view="list" />
  <Pages/>
      <Footer/>
    </div>
  )
}

export default TvshowsPage
