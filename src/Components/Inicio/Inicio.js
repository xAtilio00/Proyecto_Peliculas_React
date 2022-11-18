import React from "react";
import "./StyleInicio.css";
import image from './Portada.jpg'

function Inicio() {
  
  return (
      <div className="div-Inicio">
        <img className="Imagen-Inicio" src={image} alt='portada'></img>
      </div>
    );
}

export default Inicio;