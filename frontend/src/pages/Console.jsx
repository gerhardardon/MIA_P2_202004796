import BannerBackground from "../assets/home-banner-background.png";
import "../Home.css";
import { NavBar } from "../components/NavBar";
import { HiArrowRight } from "react-icons/hi2";
import React, { useState } from "react";
import { RiSlashCommands2 } from "react-icons/ri";

export default function Console() {
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log(text);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <div className="home-container">
        <NavBar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img
              src={BannerBackground}
              style={{
                backgroundImage: "../assets/image.png",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="home-text-section">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h1 className="primary-heading" style={{ marginRight: "20px" }}>
                <RiSlashCommands2 />
              </h1>
              <h1 className="primary-text" style={{ marginRight: "20px" }}>
                Linea de comandos
              </h1>
            </div>
            <div>
              <textarea
                className="custom-textarea"
                placeholder="-/ Ingresa tu cmd.."
                spellCheck={false}
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleClick} className="secondary-button">
              Compile <HiArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
