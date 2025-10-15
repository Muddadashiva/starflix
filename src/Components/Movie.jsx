import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Movie.css";

const cardData = {
  ENGLISH: [
    { id: "back-to-the-future", title: "BACK TO THE FUTURE", img: "/images/back-to-the-future.png" },
    { id: "jurassic-park", title: "JURASSIC PARK", img: "/images/jurassic_park.png" },
    { id: "pulse", title: "PULSE", img: "/images/pulse.png" },
    { id: "sicario", title: "SICARIO", img: "/images/sicario.png" },
    { id: "star-wars", title: "STAR WARS", img: "/images/star_wars.png" },
    { id: "last-of-us", title: "THE LAST OF US", img: "/images/the_last_of_us.png" },
    { id: "hobbit", title: "HOBBIT", img: "/images/hobbit.png" },
  ],
  HINDI: [
    { id: "12th-fail", title: "12TH FAIL", img: "/images/12th_fail.png" },
    { id: "chaava", title: "CHHAAVA", img: "/images/chhaava.png" },
    { id: "jaat", title: "JAAT", img: "/images/jaat.png" },
    { id: "the-diplomat", title: "ANG DIPLOMAT", img: "/images/the_diplomat.png" },
  ],
  TELUGU: [
    { id: "court", title: "COURT", img: "/images/court.png" },
    { id: "pushpa2", title: "PUSHPA2", img: "/images/pushp2.png" },
    { id: "kalki", title: "KALKI", img: "/images/kalki.png" },
    { id: "salaar", title: "SALAAR", img: "/images/salaar.png" },
    { id: "aa", title: "AA", img: "/images/aa.png" },
  ],
  TAMIL: [
    { id: "barateeyudu-2", title: "BARATEEYUDU 2", img: "/images/barateeyudu_2.png" },
    { id: "good-bad-ugly", title: "GOOD BAD UGLY", img: "/images/good_bad_ugly.png" },
    { id: "dragon", title: "DRAGON", img: "/images/dragon.png" },
    { id: "maharaja", title: "MAHARAJA", img: "/images/maharaja.png" },
  ],
  MALAYALAM: [
    { id: "manjummul-boys", title: "MANJUMMUL BOYS", img: "/images/manjummul_boys.png" },
    { id: "2018", title: "2018", img: "/images/2018.png" },
    { id: "ponman", title: "PONMAN", img: "/images/ponman.png" },
    { id: "rekhachithram", title: "REKHACHITHRAM", img: "/images/rekhachithram.png" },
  ],
};

const Movie = ({ viewMode = "tabs" }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    centerMode: false, // ✅ Turn off center mode for left alignment
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const renderCard = (card) => (
    <div key={card.id} className="px-2"> {/* ✅ Gap between cards */}
      <Card className="bg-transparent border-0 shadow-sm movie-card text-center">
        <div className="position-relative">
          <Card.Img src={card.img} className="rounded-3" />
          <div className="overlay d-flex justify-content-center align-items-center">
            <Link
              to={`/rating/${card.id}`}
              className="btn btn-primary btn-sm fw-semibold rounded-pill"
            >
              Read More
            </Link>
          </div>
        </div>
        <Card.Body className="p-2">
          <Card.Title className="text-white text-uppercase fs-6 mb-0">{card.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <div className="text-white py-4" style={{ backgroundColor: "#020d18" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold text-uppercase mb-0 mt-5">Movies</h2>
          <a href="/Shows" className="text-decoration-none text-white fw-semibold">
            View All &gt;
          </a>
        </div>

        {viewMode === "tabs" ? (
          <>
            <Nav
              activeKey={selectedLanguage}
              onSelect={(lang) => setSelectedLanguage(lang)}
              className="justify-content-start mb-4  flex-wrap"
            >
              {Object.keys(cardData).map((lang) => (
                <Nav.Item key={lang}>
                  <Nav.Link
                    eventKey={lang}
                    className={`text-uppercase fw-semibold ${
                      selectedLanguage === lang ? "text-warning" : "text-white"
                    }`}
                  >
                    {lang}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>

            <Slider {...sliderSettings}>
              {cardData[selectedLanguage].map(renderCard)}
            </Slider>
          </>
        ) : (
          <div className="row g-3">
            {Object.values(cardData)
              .flat()
              .map((card) => (
                <div key={card.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                  {renderCard(card)}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movie;
