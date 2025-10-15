import React from 'react'
import Movie from '../Components/Movie'
import Footer from '../Components/Footer'
import { Container,  Form,} from "react-bootstrap";
import Pages from '../Components/Pages';

const MoviePage = () => {
  return (
              
    <div  style={{  backgroundColor: "#020d18" }}>
    <div className="search-exp text-white ">
  <Container className="d-flex  justify-content-between align-items-center border border-secondary border-start-0  ">
    <p className="mb-0 ">
      Found <span className="text-primary fw-bold ">1,608</span> movies in total
    </p>
    <div className="d-flex align-items-center ">
      <label htmlFor="sortSelect" className="mb-0">Sort by:</label>
      <Form.Select
        id="sortSelect"
        size="sm"
        className="bg-dark text-white "
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


      {/* Movie List */}
      <Movie viewMode="list" />
      <Pages/>
      <Footer/>
    </div>
  )
}

export default MoviePage
