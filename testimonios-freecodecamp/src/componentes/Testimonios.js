import React from "react";
import "../hojas-de-estilo/Testimonio.css";

export function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../Imagenes/testimonio-${props.imagen}.jpg`)} alt="Foto Agus" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

