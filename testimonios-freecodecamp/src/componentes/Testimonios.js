import React from "react";
import "../hojas-de-estilo/Testimonio.css";

export function Testimonio(){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require("../Imagenes/testimonio-agus.jpg")} alt="Foto Agus" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Agustin Cruz en Argentina</p>
        <p className="cargo-testimonio">Ingeniero Industrial y Frontend Developer</p>
        <p className="texto-testimonio">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, dolorem quo illum sunt tenetur quis autem hic, incidunt, assumenda vitae explicabo fugit dolor harum quia eveniet saepe ratione rerum libero?</p>
      </div>
    </div>
  );
}
