import BannerBackground from "../assets/home-banner-background.png";
import { NavBar } from "../components/NavBar";
import { MdContentPasteSearch } from "react-icons/md";
import { IoFolderOpen } from "react-icons/io5";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import '../Home.css'


export default function Content({ip = "localhost"}) {
    const { disk, part } = useParams();
    const [path, setPath] = useState("");
    const [content, setContent] = useState(["/"]);

    const onClick = (objIterable) => {
        console.log("click",objIterable)
        if (objIterable === "/") {
            setPath("/");
            setContent(["users.txt"]);
        } else if (objIterable === "users.txt") {
            alert("users.txt\n\n1  ,  root\n1  ,  root  ,  root  ,  123");
        }
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
                <h1 className="primary-info" style={{ marginRight: "20px" }}>
                    -ruta: {path}
                </h1>
                <div style={{display: "flex", flexDirection: "row" }}>
                {content.map((objIterable, index) => {
                    if (objIterable === "/") {
                        return (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                flexDirection: "column", // Alinea los elementos en columnas
                                alignItems: "center", // Centra verticalmente los elementos
                                maxWidth: "100px",
                                margin: "15px",
                                border: "1px solid #ccc", borderRadius: "8px", padding: "auto", width: "100px"
                              }}
                              onClick={() => onClick(objIterable)}
                            >
                              <h1 className="primary-info" style={{ marginRight: "20px" } }>
                                  <IoFolderOpen /> 
                                 <p1>                {objIterable}    </p1>
                              </h1>
                              
                            </div>
                            
                          );
                    } else if (objIterable === "users.txt") {
                        return (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                flexDirection: "column", // Alinea los elementos en columnas
                                alignItems: "center", // Centra verticalmente los elementos
                                maxWidth: "150px",
                                margin: "15px",
                                border: "1px solid #ccc", borderRadius: "8px", padding: "auto"
                              }}
                              onClick={() => onClick(objIterable)}
                            >
                              <h1 className="primary-info" style={{ marginRight: "20px" } }>
                                  <FaFileAlt />
                               <p1>{objIterable}</p1>
                              </h1>
                              
                            </div>
                            
                          );
                    }
              })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}