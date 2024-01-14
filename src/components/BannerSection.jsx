import React, { useState, useEffect } from "react";
import AnimatedText from "./AnimatedText";
import "./BannerSection.scss";

const BannerSection = ({ items }) => {
  const [currentIndx, setCurrentIndx] = useState(0);
  const [distance, setDistance] = useState(0);
  const length = items.length;

  useEffect(() => {
    const interval =
      distance < 200
        ? setInterval(() => setDistance(distance + 1), 40)
        : handleNext();

    return () => clearInterval(interval);
  }, [distance]);

  const handleNext = () => {
    if (currentIndx + 1 < length) {
      setCurrentIndx((prev) => prev + 1);
      setDistance(0);
    } else {
      setCurrentIndx(0);
      setDistance(0);
    }
  };
  return (
    <section
      id="banner-slider"
      style={{ backgroundImage: `url(${items[currentIndx].image})` }}
    >
      <div className="container">
        <div className="temp"></div>
        <header>
          <h1 key={items[currentIndx].text}>
            <label>
              <AnimatedText text={items[currentIndx].text} />
            </label>
            <AnimatedText text={items[currentIndx].title1} />
            <br></br>
            <AnimatedText text={items[currentIndx].title2} initialDelay={0.5} />
          </h1>
        </header>
        <div className="next-container">
          <div className="next_thumb" onClick={handleNext}>
            <div
              className={`next_thumb-border next_thumb-border-top`}
              style={{ width: `${distance}%`, height: "10px" }}
            ></div>
            <div
              className={`next_thumb-border next_thumb-border-right`}
              style={{ height: `${distance}%`, width: "10px" }}
            ></div>
            <div
              className={`next_thumb-border next_thumb-border-bottom`}
              style={{
                width: `${distance > 100 ? distance - 100 : 0}%`,
                height: "10px",
              }}
            ></div>
            <div
              className={`next_thumb-border next_thumb-border-left`}
              style={{
                height: `${distance > 100 ? distance - 100 : 0}%`,
                width: "10px",
              }}
            ></div>
            <span>Next</span>
            <img
              src={items[currentIndx].thumbImg}
              alt={`next-image-${currentIndx}`}
            ></img>
          </div>
          <div className="next-indicator">
            <span className="next-indicator_index">0{currentIndx + 1}</span>
            <div className="next-indicator_line"></div>
            <span className="next-indicator_total">0{length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
