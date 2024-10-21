/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "./Slide.scss";

const Slideshow = ({ images, intervalTime }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images, intervalTime]);

  return (
    <div className="slideshow">
      {images.map((image: any, index: any) => (
        <img
          key={index}
          src={image}
          alt={`Slideshow Image ${index}`}
          className={index === currentIndex ? "slide-active" : "slide"}
        />
      ))}
    </div>
  );
};

export default Slideshow;
