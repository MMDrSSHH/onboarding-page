import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../../styles/onboarding.module.css";
import Button from "../button/Button";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { onboardingData as data } from "../../data/data";
import { Link } from "react-router-dom";

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const handleNext = () => {
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrent((prev) => prev - 1);
  };

  const handleNavigate = (index) => {
    setCurrent(index);
  };

  if (current !== data.length - 1) {
    return (
      <>
        <div className={style["onboarding-overlay"]}>
          <div className={style["onboarding-container"]}>
            <div className={style["onboarding-text-section"]}>
              <div className={style["onboarding-text"]}>
                <h3 className={style["text-header"]}>
                  {data[current].heading}
                </h3>
                <p className={style["text-desc"]}>
                  {data[current].description}
                </p>
              </div>
              <div className={style["navigation-container"]}>
                <div onClick={handleNext} style={{ zIndex: "10" }}>
                  <Button text="NEXT" />
                </div>
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
              </div>
            </div>
            <div className={style["onboarding-video-section"]}>
              <video className={style["background-vidoe"]} autoPlay loop>
                <source src="/videos/video-1.mp4" type="video/mp4" />
              </video>
            </div>
            {current > 0 ? (
              <button
                onClick={handlePrev}
                className={`${style["arrow-left"]} ${style["arrow-btn"]}`}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            ) : null}
            {current !== data.length - 1 ? (
              <button
                onClick={handleNext}
                className={`${style["arrow-right"]} ${style["arrow-btn"]}`}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            ) : null}
          </div>
        </div>
      </>
    );
  } else {
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
                className={style["background-vidoe"]}
                style={{ borderRadius: "10px" }}
                autoPlay
                loop
              >
                <source src="/videos/video-1.mp4" type="video/mp4" />
              </video>
              <div className={style["video-overlay"]}></div>
              <div
                className={`${style["onboarding-text"]} ${style.last}`}
                style={{ width: "100%" }}
              >
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
            {current > 0 ? (
              <button
                onClick={handlePrev}
                className={`${style["arrow-left"]} ${style["arrow-btn"]}`}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            ) : null}
            {current !== data.length - 1 ? (
              <button
                onClick={handleNext}
                className={`${style["arrow-right"]} ${style["arrow-btn"]}`}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            ) : null}
          </div>
        </div>
      </>
    );
  }
};

export default Onboarding;
