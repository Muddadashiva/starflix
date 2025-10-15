
import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";

function Header() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  // 🔹 Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  
        // <Navbar
    //   expand="lg"
    //   fixed="top"
    //   variant="dark"
    //   className={`shadow-sm ${scrolled ? "#0f2133" : "bg-transparent"} p-4`}
    //   style={{
    //     transition: "background-color 0.4s ease",
    //   }}
     <Navbar
      expand="lg"
      fixed="top"
      variant="dark"
      className="shadow-sm p-4"
      style={{
        backgroundColor: scrolled ? "#0f2133" : "transparent ",
        transition: "background-color 0.10s ease-in-out",
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/home">
          <img
            src="/images/logo1.png"
            alt="Logo"
            width="150"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapse menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-white">
            <Nav.Link href="/home" className="text-white">
              HOME
            </Nav.Link>
            <Nav.Link href="/movie" className="text-white">
              MOVIES
            </Nav.Link>
            <Nav.Link href="/shows" className="text-white">
              TV SHOWS
            </Nav.Link>
            <Nav.Link href="/popular" className="text-white">
              NEW & POPULAR
            </Nav.Link>

            {/* Dropdown */}
            <Dropdown
               
              show={show}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              align="end"
              className="ms-lg-3"
            >
              <Dropdown.Toggle
                
                as="div"
                className="border-0 bg-transparent p-0"
                id="dropdown-custom"
                style={{ cursor: "pointer" }}
              >
                <img
                  src="/images/digit_icon.png"
                  alt="Account"
                  width="45"
                

                  className="rounded-circle border border-light p-2 bg-white"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu
                className="text-center "
                style={{ backgroundColor:"#0f2133" , border: "none" }}
              >
                <Dropdown.Item href="#digitit" className="fw-bold text-uppercase text-white border-bottom mb-2">
                  DIGIT IT
                </Dropdown.Item>
                <Dropdown.Item href="/profile" className="fw-bold text-white">
                  ACCOUNT
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/" className="fw-bold text-danger">
                  ↻ SIGN OUT OF STARFLIX
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
