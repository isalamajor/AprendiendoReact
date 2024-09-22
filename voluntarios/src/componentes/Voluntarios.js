import React from "react";
import '../stylesheets/Voluntario.css';
import LoremIpsum from '../LoremIpsum';
 
function Voluntario(props) {
  return (
    <div className="contenedor-voluntario">
      
      <img 
        className="foto-voluntario" 
        src={require(`../img/${props.imagen}.jpg`)} 
        alt='Voluntario'>
      </img>

      <div className="contenedor-texto">
        <p className="nombre-voluntario"><strong>{props.nombre}</strong> de {props.pais}</p>
        <p className="puesto-voluntario">{props.puesto} en <strong>{props.empresa}</strong></p>
        <p className="texto-voluntario">{props.descripcion}</p>
      </div>
      
    </div>    
    
  )
}

export default Voluntario;