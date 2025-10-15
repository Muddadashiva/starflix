import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const showsData = [
  { id: 1, title: "BIG BOSS", img: "images/bigboss.png" },
  { id: 2, title: "BREAKING BAD", img: "images/breaking_bad.png" },
  { id: 3, title: "KOFFEE WITH KARAN", img: "images/koffee-with-karan.png" },
  { id: 4, title: "ISHMART JODI", img: "images/ishmart_jodi.png" },
  { id: 5, title: "SHER LOCK", img: "images/sherlock.png" },
  { id: 6, title: "DANCE +", img: "images/dance.png" },
  { id: 7, title: "CHERNOBYL", img: "images/chernobyl.png" },
  { id: 8, title: "DANCE DEEWANE", img: "images/dance-deewane.png" },
  { id: 9, title: "KIRAACKBOYS KHILADIGRILS", img: "images/kiraack_boys_khiladi_girls.png" },
  { id: 10, title: "SUPERSINGER JUNIOR", img: "images/supersinger_junior.png" },
  { id: 11, title: "THE LAST DANCE", img: "images/the-last-dance.png" },
  { id: 12, title: "GAME OF THRONES", img: "images/game-of-thrones.png" },
];

const Shows = ({ view = "slider" }) => {
  const [hovered, setHovered] = useState(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6, // Laptop/Desktop
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // Tablet
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Mobile
    ],
  };

  const renderCard = (card) => (
    <div
      key={card.id}
      className="d-flex justify-content-center py-5"
      onMouseEnter={() => setHovered(card.id)}
      onMouseLeave={() => setHovered(null)}
    >
      <Card
        className="bg-transparent  position-relative "
        style={{ width: "12rem", cursor: "pointer" }}
      >
        <Card.Img
          variant="top"
          src={card.img}
          style={{ height: "280px", objectFit: "", borderRadius: "5px" }}
        />

        {/* Overlay button */}
        <div
          className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            background: "rgba(0,0,0,0.6)",
            borderRadius: "10px",
             opacity: hovered === card.id ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
           <Link
              to={`/rating/${card.id}`}
              className="btn btn-primary btn-sm fw-semibold rounded-pill p-3"
            >
              Read More
            </Link>
        </div>

        <Card.Body className="p-2 text-center">
          <Card.Title className="text-white text-uppercase fs-6">
            {card.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <div className="text-white" style={{ backgroundColor: "#020d18" }}>
      <div className="container">
        {/* Title */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold text-uppercase mt-5">
            {view === "slider" ? "POPULAR TV SHOWS" : " "}
          </h2>
          {view === "slider" && (
            <a
              href="/shows"
              className="text-decoration-none text-white fw-semibold"
            >
              View All &gt;
            </a>
          )}
        </div>

        {/* Slider or Grid/List view */}
        {view === "slider" ? (
          <Slider {...sliderSettings}>{showsData.map(renderCard)}</Slider>
        ) : (
          <div className="row g-4">
            {showsData.map((card) => (
              <div
                key={card.id}
                className="col-md-2 col-sm-6 d-flex justify-content-center"
                // style={{ padding: "0 5px" }} // optional extra gap
              >
                {renderCard(card)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shows;
