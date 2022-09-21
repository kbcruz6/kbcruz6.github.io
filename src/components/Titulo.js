import React from "react";
import logo from "../imagenes/logoReact.png";
import "../hoja-de-estilos/Titulo.css";


  function Titulo() {
    return(
      <div className='title-cont'>
        <img src={logo} className="logo" />
        <h1 className="h1-title">Tasks App</h1>
        <img src={logo} className="logo" />
      </div>
    );
  }
  
  export default Titulo;