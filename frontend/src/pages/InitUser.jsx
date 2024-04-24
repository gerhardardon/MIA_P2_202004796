import BannerBackground from "../assets/home-banner-background.png";
import "../Home.css";
import { NavBar } from "../components/NavBar";
import { MdContentPasteSearch } from "react-icons/md";
import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { useParams } from "react-router-dom";

export default function InitUser() {
  const { disk, part } = useParams();

  const handleClick = (e) => {
    e.preventDefault();
    console.log("submit", disk, part);
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("contrasena").value;
    console.log("user:", user,"pass:", pass);
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
                <MdContentPasteSearch />
              </h1>
              <h1 className="primary-text" style={{ marginRight: "20px" }}>
                Explorador de archivos
              </h1>
            </div>

            <div className="card">
              <form>
                <h2> Login </h2>
                <div className="form-group">
                  <label htmlFor="usuario">Usuario:</label>
                  <input type="text" id="usuario" name="user" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contrasena">Contraseña:</label>
                  <input type="password" id="contrasena" name="pass" required />
                </div>
              </form>
            </div>
            <button onClick={handleClick} className="secondary-button">
              Ingresar <HiArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
