import React, { useEffect, useRef, useState } from "react";
// components
import Button from "../button/Button";
import { Link } from "react-router-dom";
// Styles
import style from "../../styles/onboarding.module.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// data
import { onboardingData as data } from "../../data/data";

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current !== null) {
      // Trigger sliding animation
      sliderRef.current.style.transform = `translateX(-${
        (100 / (data.length - 1)) * current
      }%)`;
    }
    // reloading the video after every slide change
    videoRef.current.load();
  }, [current]);

  // Slide to next
  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  // Slide to previous
  const handlePrev = () => {
    setCurrent((prev) => prev - 1);
  };

  // Slide to terget index
  const handleNavigate = (index) => {
    setCurrent(index);
  };

  // JSX for first (n - 1) slides
  if (current !== data.length - 1) {
    return (
      <>
        <div className={style["onboarding-overlay"]}>
          <div className={style["onboarding-container"]}>
            {/* Left side (text section) */}
            <div className={style["onboarding-text-section"]}>
              {/* Slider container */}
              <div
                className={style["text-slider"]}
                ref={sliderRef}
                style={{ width: `${(data.length - 1) * 100}%` }}
              >
                {data.slice(0, data.length - 1).map((item) => {
                  return (
                    <div key={item.id} className={style["slide-item"]}>
                      <div className={style["onboarding-text"]}>
                        <h3 className={style["text-header"]}>{item.heading}</h3>
                        <p className={style["text-desc"]}>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Slider container */}
              <div className={style["navigation-container"]}>
                <div onClick={handleNext} style={{ zIndex: "10" }}>
                  <Button text="NEXT" />
                </div>
                {/* Bullets for index navigating */}
                <div className={style.navigation}>
                  {data.slice(0, data.length - 1).map((item, index) => (
                    <span
                      onClick={() => handleNavigate(index)}
                      key={item.id}
                      className={`${style.bullet} ${
                        index === current ? style.selected : ""
                      }`}
                    ></span>
                  ))}
                </div>
                {/* Bullets for index navigating */}
              </div>
            </div>
            {/* Left side (text section) */}
            {/* Right side (video section) */}
            <div className={style["onboarding-video-section"]}>
              <video
                className={style["background-video"]}
                ref={videoRef}
                autoPlay
                loop
                muted
              >
                <source src={data[current].video} type="video/mp4" />
              </video>
            </div>
            {/* Right side (video section) */}
            {/* Slide navigation buttons */}
            {current > 0 ? (
              <button
                onClick={handlePrev}
                className={`${style["arrow-left"]} ${style["arrow-btn"]}`}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            ) : null}
            <button
              onClick={handleNext}
              className={`${style["arrow-right"]} ${style["arrow-btn"]}`}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            {/* Slide navigation buttons */}
          </div>
        </div>
      </>
    );
  }
  // JSX for last slide (data item)
  else {
    return (
      <>
        <div className={style["onboarding-overlay"]}>
          <div
            className={style["onboarding-container"]}
            style={{ width: "30%" }}
          >
            <div
              className={`${style["onboarding-video-section"]} ${style.last}`}
              style={{ width: "100%", borderRadius: "10px" }}
            >
              <video
                className={style["background-video"]}
                style={{ borderRadius: "10px" }}
                ref={videoRef}
                autoPlay
                loop
                muted
              >
                <source src="/videos/video-1.mp4" type="video/mp4" />
              </video>
              <div className={style["video-overlay"]}></div>
              <div className={`${style["onboarding-text"]} ${style.last}`}>
                <h3 className={`${style["text-header"]} ${style.last}`}>
                  {data[current].heading}
                </h3>
                <p className={`${style["text-desc"]} ${style.last}`}>
                  {data[current].description}
                </p>
              </div>
              <Link to="/home" className={style["link-button"]}>
                <Button text="START WRITING" />
              </Link>
            </div>
            {/* Slide navigation button */}
            <button
              onClick={handlePrev}
              className={`${style["arrow-left"]} ${style["arrow-btn"]}`}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {/* Slide navigation buttons */}
          </div>
        </div>
      </>
    );
  }
};

export default Onboarding;
