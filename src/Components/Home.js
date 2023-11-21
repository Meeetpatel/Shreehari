import React, { useState, useRef, useEffect, useCallback } from "react";

const Home = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if parentWidth is valid, otherwise default to a reasonable width
  const validParentWidth =
    parentWidth && !isNaN(parentWidth) ? parentWidth : 1500;

  const sliderStyles = {
    height: "50vw", // Adjusted for responsive design
    position: "relative",
    display: "flex",
    transition: "transform ease-out 0.3s",
    overflow: "hidden",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftarrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "16px", // Adjusted for responsive design
    fontSize: "30px", // Adjusted for responsive design
    zIndex: 1,
    cursor: "pointer",
  };

  const rightarrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "16px", // Adjusted for responsive design
    fontSize: "30px", // Adjusted for responsive design
    zIndex: 1,
    cursor: "pointer",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const slideStyleswithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${validParentWidth}px`,
  });

  const getSlidesContainerStylesWithWidth = () => ({
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
    width: `${validParentWidth * slides.length}px`,
    transform: `translateX(${-(currentIndex * validParentWidth)}px)`,
  });

  const slidesContainerOverflowStyles = {
    overflow: "hidden",
    height: "100%",
  };

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);
    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div style={leftarrowStyle} onClick={goToPrevious}>
        &larr;
      </div>
      <div style={rightarrowStyle} onClick={goToNext}>
        &rarr;
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={slideStyleswithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
