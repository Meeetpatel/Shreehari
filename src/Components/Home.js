import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import HIW from "./HIW";
import Contact from "./Contact";
import "./styles.css";
const Home = ({ slides, setShowHome }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(getSliderHeight());

  function getSliderHeight() {
    const windowWidth = window.innerWidth;
    return windowWidth <= 768 ? "100vh" : "45vw";
  }

  useEffect(() => {
    const handleResize = () => {
      setSliderHeight(getSliderHeight());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleNextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    timerRef.current = setInterval(handleNextSlide, 4500);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [currentIndex, slides]);

  const sliderStyles = {
    height: sliderHeight,
    width: "98vw",
    position: "relative",
    display: "flex",
    overflow: "hidden",
    marginBottom: "10%",
  };

  const slideStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundPosition: "center",
    overflow: "hidden",
    backgroundSize: "cover",
    transition: "opacity 0.8s ease-in-out",
  };

  const slideStyleswithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    opacity: currentIndex === slideIndex ? 1 : 0,
    zIndex: currentIndex === slideIndex ? 2 : 1,
  });

  const cardContents = [
    {
      text: "WE MAKE YOUR HOUSE A DREAM HOME",
      buttonLabel: "GET STARTED",
      buttonLink: "/HIW",
      className: "card1",
    },
    {
      text: "DESIGNING ROOMS YOU LOVE TO LIVE IN",
      buttonLabel: "VIEW GALLERY",
      buttonLink: "/Gallery",
      className: "card2",
    },
    {
      text: "DESIGN ADDS VALUE FASTER THEN IT ADDS COSTS",
      buttonLabel: "GET A QUOTE",
      buttonLink: "/Contact",
      className: "card3",
    },
    {
      text: "WE DESIGN, YOU LIVE",
      buttonLabel: "HOW IT WORKS",
      buttonLink: "/HIW",
      className: "card4",
    },
    {
      text: "DESIGNING HOMES FOR MORE THAN 15 YEARS",
      buttonLabel: "ABOUT US",
      buttonLink: "/About",
      className: "card5",
    },
  ];

  return setShowHome ? (
    <>
      <div style={sliderStyles}>
        {slides.map((_, slideIndex) => (
          <div key={slideIndex} style={slideStyleswithBackground(slideIndex)}>
            <div
              className={`${cardContents[slideIndex].className}`}
              style={{
                borderRadius: "15px",
                marginLeft: "10%",
              }}
            >
              <div
                className="card-body"
                style={{
                  textAlign: "center",
                  margin: "7%",
                }}
              >
                <p className="card-text">"{cardContents[slideIndex].text}"</p>
                <Link
                  to={cardContents[slideIndex].buttonLink}
                  className="cardbtn"
                >
                  {cardContents[slideIndex].buttonLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <HIW></HIW>

      <Contact></Contact>
    </>
  ) : null;
};

export default Home;
