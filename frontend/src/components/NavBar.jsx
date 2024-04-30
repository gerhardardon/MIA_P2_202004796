import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import React, { useState } from "react";

export function NavBar({ip = "52.90.232.68"}) {
  
  const handleLogout = () => {
    console.log(ip);
    fetch(`http://${ip}:3000/logout`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "-user logged out"){
          alert("¡Hasta luego!\n"+data.message);
          window.location.href = "/";
        } else {
          alert("¡Ups!\n"+data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  return (
    <nav>
      <div className="navbar-links-container">
        <a href="/"><FaHome/> Home</a>
        <a href="#/console">Consola</a>
        <a href="#/explore">Explorar</a>
        <a href="#/reports">Reportes</a>
        <a style={{color: "red"}} onClick={handleLogout}>Logout <FiLogOut /></a>
      </div>
    </nav>
  );
}