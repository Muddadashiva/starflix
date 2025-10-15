import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import {
  FaStar, FaHeart, FaShareAlt,
  FaPlay,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGoogle,
} from "react-icons/fa";

import Header from "../Components/Header";
import Movie from "../Components/Movie";
import Shows from "../Components/shows";
import Footer from "../Components/Footer";
import Theater from "../Components/Theater";

function HomePage() {
  const slides = [
    {
      id: 1,
      title: "CHHAVA",
      description:
        "After Chhatrapati Shivaji Maharaj's death, the Mughals aim to expand into the Deccan, only to face his fearless son, Chhatrapati Sambhaji Maharaj. Inspired by Shivaji Sawant's novel, this story shows courage, strategy, and betrayal.",
      tags: ["DRAMA", "ACTION", "HISTORICAL"],
      rating: "9.2/10",
      runtime: "2h 41m",
      age: "UA16+",
      poster: "/Images/chhaava.png",
    },
    {
      id: 2,
      title: "Mad Square",
      description:
        "Mad Square is a Telugu movie starring Narne Nithin, Sangeeth Shobhan, Ram Nithin and Priyanka Jawalkar in prominent roles. It is written and directed by Kalyan Shankar.",
      tags: ["DRAMA", "COMEDY"],
      rating: "8.4/10",
      runtime: "2h 7m",
      age: "UA16+",
      poster: "/images/mad-square.png",
    },
    {
      id: 3,
      title: "Warfare",
      description:
        "Written and directed by Iraq War veteran Ray Mendoza and Alex Garland, Warfare embeds audiences with a platoon of American Navy SEALs on a surveillance mission gone wrong in insurgent territory.",
      tags: ["DRAMA", "WAR"],
      rating: "8.4/10",
      runtime: "1h 38m",
      age: "A",
      poster: "/images/warfare.jpg",
    },
  ];

  const [showShareIcons, setShowShareIcons] = useState(false);

  return (
    <div>
      <Header />

      {/* Carousel Section */}
      <div
        className="Homepage w-100 d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: "url('images/login-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-100">
          <Carousel slide interval={4000} indicators={false}>
            {slides.map((slide) => (
              <Carousel.Item key={slide.id}>
                <div
                  className="text-light py-5"
                  style={{ minHeight: "0vh", marginTop: "40px" }}
                >
                  <Container className="py-5 ">
                    <Row
                      className="align-items-center justify-content-center"
                      style={{ position: "relative" }}
                    >
                      {/* TEXT (Left side) */}
                      <Col
                        md={5}
                        sm={12}
                        className="order-2 order-md-1 text-start"
                      >
                        <div className="mb-2">
                          {slide.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              bg={
                                i === 0
                                  ? "info"
                                  : i === 1
                                    ? "primary"
                                    : "warning"
                              }
                              text={i === 2 ? "dark" : undefined}
                              style={{ marginRight: "0.5rem" }}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <h1 className="fw-bold">{slide.title}</h1>
                        <p className="mt-3">{slide.description}</p>

                        <div className="my-4">
                          <Link
                            to="#"
                            style={{
                              textDecoration: "none",
                              color: "#12aee5",
                              fontSize: "14px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              marginRight: "2rem",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                padding: "10px 14px",
                                borderRadius: "50%",
                                border: "1px solid #12aee5",
                                marginRight: "8px",
                                fontSize: "18px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <FaPlay />
                            </span>
                            WATCH TRAILER
                          </Link>

                          <Link
                            to="#"
                            style={{
                              textDecoration: "none",
                              color: "#12aee5",
                              fontSize: "14px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              marginRight: "2rem",
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                padding: "10px 14px",
                                borderRadius: "50%",
                                border: "1px solid #12aee5",
                                marginRight: "8px",
                                fontSize: "18px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <FaHeart />
                            </span>
                            ADD TO FAVORITE
                          </Link>

                          <div
                            style={{ display: "inline-block", position: "relative" }}
                            onMouseEnter={() => setShowShareIcons(true)}
                            onMouseLeave={() => setShowShareIcons(false)}
                          >
                            <div
                              style={{ display: "inline-block", position: "relative" }}
                              onMouseEnter={() => setShowShareIcons(true)}
                              onMouseLeave={() => setShowShareIcons(false)}
                            >
                              <Link
                                to="#"
                                style={{
                                  textDecoration: "none",
                                  color: "#12aee5",
                                  fontSize: "14px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  display: "inline-flex",
                                  alignItems: "center",
                                }}
                              >
                                <span
                                  style={{
                                    padding: "10px 14px",
                                    borderRadius: "50%",
                                    border: "1px solid #12aee5",
                                    marginRight: "8px",
                                    fontSize: "18px",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <FaShareAlt />
                                </span>
                                SHARE
                              </Link>

                              {showShareIcons && (
                                <div
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: "100%",    // align icons to the right side
                                    marginLeft: "8px", // small gap between button and icons
                                    backgroundColor: "#1dd2dfff",
                                    display: "flex",
                                    padding: "0.5rem",
                                    borderRadius: "4px",
                                    gap: "12px",
                                    zIndex: 10,
                                    whiteSpace: "nowrap",
                                    // padding:"10px",
                                  }}
                                >
                                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <FaFacebookF color="#fff" size={20} />
                                  </a>
                                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <FaTwitter color="#fff" size={20} />
                                  </a>
                                  <a href="https://google.com" target="_blank" rel="noreferrer">
                                    <FaGoogle color="#fff" size={20} />
                                  </a>
                                  <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                    <FaYoutube color="#fff" size={20} />
                                  </a>
                                </div>
                              )}
                            </div>

                          </div>
                        </div>

                        <div >
                          <span
                            className="me-5 text-warning"
                            style={{ display: "inline-flex", alignItems: "center" }}
                          >
                            <FaStar className="me-1" />
                            {slide.rating}
                          </span>
                          <span className="me-3 text-secondary">
                            Run Time: {slide.runtime}
                          </span>
                          <span className="text-secondary">{slide.age}</span>
                        </div>

                        <div className="mt-5">
                          <Link
                            to="/Rating/:id"
                            style={{
                              textDecoration: "none",
                              color: "white",
                              backgroundColor: "#12aee5",
                              padding: "1rem",
                              borderRadius: "1.5rem",
                              fontWeight: "bold",
                            }}
                          >
                            MORE DETAIL
                          </Link>
                        </div>
                      </Col>

                      {/* POSTER (Right side) */}
                      <Col
                        md={6}
                        sm={12}
                        className="order-1 order-md-2 text-center"
                      >
                        <img
                          src={slide.poster}
                          alt={slide.title}
                          style={{
                            maxHeight: "350px",
                            width: "auto",
                            borderRadius: "0.5rem",
                            boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
                          }}
                          className="img-fluid"
                        />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <Movie viewMode="tabs" />
      <Shows />
      <Theater />
      <Footer />
    </div>
  );
}

export default HomePage;
