import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button
} from "react-bootstrap";
import Header from "../Components/Header";
import Pages from "../Components/Pages";
import Footer from "../Components/Footer";
import Search from "../Components/Search";
import "../Styles/Popular.css";

const Popular = () => {
  const movies = [
    { id: 1, title: "BACK TO THE FUTURE", img: "images/back-to-the-future.png" },
    { id: 2, title: "JURASSIC PARK", img: "images/jurassic_park.png" },
    { id: 3, title: "PULSE", img: "images/pulse.png" },
    { id: 4, title: "SICARIO", img: "images/sicario.png" },
    { id: 5, title: "STAR WARS", img: "images/star_wars.png" },
    { id: 6, title: "KIRAACKBOYS KHILADIGRILS", img: "images/kiraack_boys_khiladi_girls.png" },
    { id: 7, title: "SUPERSINGER JUNIOR", img: "images/supersinger_junior.png" },
    { id: 8, title: "THE LAST DANCE", img: "images/the-last-dance.png" },
    { id: 9, title: "GAME OF THRONES", img: "images/game-of-thrones.png" },
    { id: 10, title: "DANCE +", img: "images/dance.png" },
    { id: 11, title: "PUSPHA2", img: "images/pushp2.png" },
    { id: 12, title: "KALKI", img: "images/kalki.png" },
  ];

  return (
    <div className="text-light min-vh-100" style={{  backgroundColor: "#020d18" }}>
      

      <Container className="p-4">


        <Row>
          {/* Movie Grid Section */}
          <Col md={9}>
            <Container className="d-flex justify-content-between align-items-center border border-secondary border-start-0 mb-5 ">
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
            <Row className="g-3">
              {movies.map((movie) => (
                <Col
                  key={movie.id}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={6}
                  className="d-flex justify-content-center"
                >
                  <Card
                    className="text-white border-0 shadow-sm movie-card bg-transparent d-flex flex-column"
                    style={{ width: "11rem", cursor: "pointer" }}
                  >
                    <div className="position-relative movie-card-img">
                      <Card.Img
                        variant="top"
                        src={movie.img}
                        alt={movie.title}
                        style={{ height: "260px", }}
                      />
                      {/* Overlay Button */}
                      <div className="overlay d-flex justify-content-center align-items-center">
                        <Button className="read-more-btn rounded-pill mb-3" variant="primary" size="md">Read More</Button>
                      </div>
                    </div>

                    <Card.Body
                      className="text-center p-2 bg-transparent"
                      
                    >
                      <Card.Title
                        className="fw-bold text-uppercase"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {movie.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Filter Sidebar */}
          <Col md={3}>
            <h5 className="fw-bold border-bottom pb-2">SEARCH FOR MOVIE</h5>
            <Form className="p-3 border rounded">
              <Form.Group className="mb-3">
                <Form.Label>Movie name</Form.Label>
                <Form.Control type="text" placeholder="Enter keywords" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Genres & Subgenres</Form.Label>
                <Form.Select>
                  <option>Enter to filter genres</option>
                  <option>Action</option>
                  <option>Drama</option>
                  <option>Comedy</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Rating Range</Form.Label>
                <Form.Select>
                  <option>-- Select the rating range below --</option>
                  <option>1 - 3</option>
                  <option>4 - 6</option>
                  <option>7 - 10</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Release Year</Form.Label>
                <Row>
                  <Col>
                    <Form.Select>
                      <option>From</option>
                      <option>2000</option>
                      <option>2010</option>
                      <option>2020</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select>
                      <option>To</option>
                      <option>2010</option>
                      <option>2020</option>
                      <option>2025</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                SUBMIT
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Pages />
      <Footer />
    </div>
  );
};

export default Popular;
