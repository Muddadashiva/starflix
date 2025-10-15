
import React, { useState } from "react";
import Slider from "react-slick";
import "../Styles/Theater.css";
import { Container } from "react-bootstrap";
import { ChevronUp, ChevronDown } from "lucide-react"; // for clean icons

const videos = [
  {
    id: 1,
    title: "Oblivion: Official Teaser Trailer",
    duration: "2:37",
    img: "images/trailer2.jpg",
    url: "https://www.youtube.com/embed/XmIIgE7eSak",
  },
  {
    id: 2,
    title: "Exclusive Interview: Skull Island",
    duration: "2:44",
    img: "images/trailer3.png",
    url: "https://www.youtube.com/embed/44LdLqgOpjo",
  },
  {
    id: 3,
    title: "Logan: Director James Mangold Interview",
    duration: "2:43",
    img: "images/trailer4.png",
    url: "https://www.youtube.com/embed/Div0iP65aZo",
  },
  {
    id: 4,
    title: "Beauty and the Beast: Official Teaser Trailer 2",
    duration: "2:32",
    img: "images/trailer5.jpg",
    url: "https://www.youtube.com/embed/OvW_L8sTu5E",
  },
  {
    id: 5,
    title: "Fast & Furious 8",
    duration: "2:30",
    img: "images/trailer6.jpg",
    url: "https://www.youtube.com/embed/uisBaTkQAEs",
  },
  {
    id: 6,
    title: "Wonder Woman",
    duration: "2:30",
    img: "images/trailer7.jpg",
    url: "https://www.youtube.com/embed/1Q8fG0TtVAY",
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div className="arrow-btn down-arrow" onClick={onClick}>
    <ChevronDown size={22} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow-btn up-arrow" onClick={onClick}>
    <ChevronUp size={22} />
  </div>
);

const Theater = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveVideo(videos[next]),
  };

  return (
    <div className="theater-section text-white py-4">
      <Container>
        <div className="container-fluid px-3 mt-5" >
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold text-uppercase mb-0">In Theater</h4>
            <a href="#" className="text-decoration-none text-white fw-semibold">
              VIEW ALL &gt;
            </a>
          </div>

          <div className="row">
            {/* Main Video */}
            <div className="col-lg-7 mb-3">
              <div className="ratio ratio-16x9 rounded overflow-hidden shadow">
                <iframe
                  src={activeVideo.url}
                  title={activeVideo.title}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video List */}
            <div className="col-lg-5 position-relative">
              <Slider {...settings} className="video-slider">
                {videos.map((video) => (
                  <div
                    key={video.id}
                    className={`video-item d-flex py-3 me-3 rounded ${
                      activeVideo.id === video.id ? "active" : ""
                    }`}
                    onClick={() => setActiveVideo(video)}
                  >
                    <img
                      src={video.img}
                      alt={video.title}
                      className="thumb me-4"
                    />
                    <div >
                      <h6 >{video.title}</h6>    {/**fw-semibold */}
                      <small>{video.duration}</small>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Theater;