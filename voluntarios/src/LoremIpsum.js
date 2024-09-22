import React from "react";

// Función para generar Lorem Ipsum con un límite de caracteres
const generateLoremIpsum = (charLimit) => {
  const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. 
  Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius 
  blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. 
  Vestibulum id ligula porta felis euismod semper.`;

  // Recortamos el texto para que tenga un número específico de caracteres
  return loremText.slice(0, charLimit);
};

const LoremIpsum = ({ charLimit }) => {
  return (
    <div className="texto-voluntario">
      <p>{generateLoremIpsum(charLimit)}</p>
    </div>
  );
};

export default LoremIpsum;
