import BannerBackground from "../assets/home-banner-background.png";
import "../Home.css";
import { NavBar } from "../components/NavBar";
import { MdContentPasteSearch } from "react-icons/md";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PiCardsFill } from "react-icons/pi";
import { useParams } from "react-router-dom";

export default function Partitions() {
  const [partitions, setPartitions] = useState([]);
  const navigate = useNavigate()
  const {id} = useParams()

  useState(() => {
    const rawData = {
      partitions: ["Part1","Part2"]
    };
    setPartitions(rawData.partitions);
  }, []);

  const onClick = (objIterable) => {
    //e.preventDefault()
    //console.log("click",objIterable)
    navigate(`/login/${id}/${objIterable}`)
  }

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
            {partitions.length === 0 ? (
              <h1 className="primary-info" style={{ marginRight: "20px" }}>
                ups! aun no hay particiones disponibles
              </h1>
            ) : (
                <div style={{display: "flex", flexDirection: "row" }}>
              {partitions.map((objIterable, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column", // Alinea los elementos en columnas
                      alignItems: "center", // Centra verticalmente los elementos
                      maxWidth: "100px",
                      margin: "15px",
                      border: "1px solid #ccc", borderRadius: "8px", padding: "0px"
                    }}
                    onClick={() => onClick(objIterable)}
                  >
                    
                    <h1 className="primary-info" style={{ marginRight: "20px" } }>
                     <PiCardsFill />
                     <p1>{objIterable}</p1>
                    </h1>
                    
                  </div>
                  
                );
              })}
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
