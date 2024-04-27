import BannerBackground from "../assets/home-banner-background.png";
import "../Home.css";
import { NavBar } from "../components/NavBar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { FaPencilRuler } from "react-icons/fa";
import { Graphviz } from 'graphviz-react';

export default function Reports({ip = "localhost"}) {
  const [disks, setDisks] = useState([]);
  const navigate = useNavigate()
  const [graph, setGraph] = useState("digraph {}");

  useState(() => {

    fetch(`http://${ip}:3000/reports`, {
      method: "GET"
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.reports != ""){
          setDisks(data.reports);
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
    const formData = new FormData();
    formData.append("name", objIterable);

    fetch(`http://${ip}:3000/report`, {
      method: "POST",
        body: formData
    })
    .then(response => response.text()) // Convertir la respuesta a texto
    .then(data => {
      // Actualizar el estado con el string recibido del servidor
      console.log(data);
      setGraph(data);
    })
    .catch(error => {
      console.error('Error al obtener el string del servidor:', error);
      });
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
                <BsPencilSquare />
              </h1>
              <h1 className="primary-text" style={{ marginRight: "20px" }}>
                Reportes generados
              </h1>
            </div>
            {disks.length === 0 ? (
              <h1 className="primary-info" style={{ marginRight: "20px" }}>
                ups! aun no hay reportes disponibles
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
                      maxWidth: "200px",
                      margin: "15px",
                      border: "1px solid #ccc", borderRadius: "8px", padding: "0px"
                    }}
                    onClick={() => onClick(objIterable)}
                  >
                    
                    <h1 className="primary-info" style={{ marginRight: "20px" } }>
                        <FaPencilRuler />
                     <p1>{objIterable}</p1>
                    </h1>
                    
                  </div>
                  
                );
              })}
                </div>
            )}
            <div style={{display: "flex", justifyContent:"center", }}>
              <Graphviz dot={graph} options={{zoom: false}} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}