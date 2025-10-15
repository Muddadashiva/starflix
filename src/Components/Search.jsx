import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    
    <div >
      <Container>
        <Row className="align-items-center" style={{ marginTop: "110px",  }}>
          {/* Dropdown and Search on the same row */}
          <Col md={12} className="d-none d-md-block">
            <InputGroup style={{ height: "45px"}} >
              {/* Dropdown */}
              <DropdownButton
                id="dropdown-basic-button"
                title="MOVIES"
                variant="secondary"
                className="me-5"
                style={{ backgroundColor: "#233a50" }}
              >
                <Dropdown.Item>TV Shows</Dropdown.Item>
                <Dropdown.Item>Other</Dropdown.Item>
              </DropdownButton>

              {/* Search Input */}
              <Form.Control              
                type="text"
                 placeholder="Search for a movie, TV Show or celebrity"
                className="border  text-white"
                style={{ backgroundColor: "#233a50" }}
             
 />
              {/* Search Icon */}
              <InputGroup.Text className=" text-white"style={{ backgroundColor: "#233a50" }} >
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
            
          </Col>
           
        </Row>
        
      </Container>
    </div>
  );
};

export default Search;
