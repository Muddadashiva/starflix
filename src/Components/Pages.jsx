import React, { useState } from "react";
import { Pagination, Form, Row, Col, Container } from "react-bootstrap";
import '../Styles/Pages.css'

const Pages = () => {


  return (
    <div className="text-light border-secondary " style={{ backgroundColor: "#020d18" }}>
      <Container>
        <div className="d-flex align-items-center justify-content-between  border-top border-bottom ">
          {/* Movies per page */}
            <div className="d-flex align-items-center w-25">
              <label className="fw-semibold mb-0 w-100">Movies per page:</label>
              <Form.Select
                size="sm"
                // value={moviesPerPage}
                // onChange={handleMoviesPerPageChange}
                className="bg-dark text-light border-0 bg-transparent form-select"
                style={{ maxWidth: "200px" }}
              >
                <option value={10}>10 Movies</option>
                <option value={20}>20 Movies</option>
               
              </Form.Select>
            </div>

          {/* Pagination section */}
          <Col xs={12} md="auto">
            <div className=" pagination d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2">
              <span className="fw-semibold text-light">
                {/* Page {currentPage} of {totalPages} */}
              </span>
              {/* <Pagination className="mb-0 me-2"> */}
                {/* {generatePaginationItems()} */}
                <a href="/movie" className="text-light active">1</a>
                <a href="" className="text-light">2</a>
                <a href="" className="text-light">3</a>
                <a href="" className="text-light">....</a>
                <a href="" className="text-light">73</a>
                <a href="" className="text-light">74</a>
                <a href="" className="text-light">75</a>
              {/* </Pagination> */}
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default Pages;
