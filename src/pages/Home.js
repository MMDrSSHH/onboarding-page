import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button/Button";

const Home = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#01ca8a",
        }}
      >
        <div
          style={{
            width: "30%",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            gap: "40px",
          }}
        >
          <h1>Home</h1>
          <Link
            to="/onboarding"
            style={{ boxShadow: "0 0 30px 10px rgba(70, 70, 70, 0.2)" }}
          >
            <Button text="ONBOARDING PAGE" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
