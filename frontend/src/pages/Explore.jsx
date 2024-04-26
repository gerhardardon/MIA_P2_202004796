import BannerBackground from "../assets/home-banner-background.png";
import "../Home.css";
import { NavBar } from "../components/NavBar";
import { MdContentPasteSearch } from "react-icons/md";
import React, { useState } from "react";
import { PiFloppyDiskDuotone } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Console({ip = "localhost"}) {
  const [disks, setDisks] = useState([]);
  const navigate = useNavigate()

  useState(() => {

    fetch(`http://${ip}:3000/disks`, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.disks != ""){
          setDisks(data.disks);
        }
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    /*const rawData = {
      disks: ["A.dsk", "B.dsk", "C.dsk", "D.dsk"],
    };
    setDisks(rawData.disks);*/
  }, []);

  const onClick = (objIterable) => {
    //e.preventDefault()
    //console.log("click",objIterable)
    navigate(`/disk/${objIterable}`)
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
            {disks.length === 0 ? (
              <h1 className="primary-info" style={{ marginRight: "20px" }}>
                ups! aun no hay discos disponibles
              </h1>
            ) : (
                <div style={{display: "flex", flexDirection: "row" }}>
              {disks.map((objIterable, index) => {
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
                      <PiFloppyDiskDuotone />
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
