import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" text-light py-3 mt-auto"  style={{ backgroundColor: '#0f2133' ,backgroundImage: "url('/images/user-hero-bg.jpg')" }}>
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col className="text-start">
            <small>© 2025 StarFlix. All Rights Reserved.</small>
          </Col>

          {/* Right Side */}
          <Col className="text-end">
            <button
              onClick={scrollToTop}
              className="btn btn-link text-light text-decoration-none p-0"
            >
              Back to top ↑
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;