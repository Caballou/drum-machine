import React from "react";
import '../stylesheets/Pads.css'
import { useState, useEffect } from 'react';

function Pads(props) {

  const [pressed, setPressed] = useState(false)

  /* Función para activar los sonidos y settear como activo el botón renderizado*/
  const play = () => {
    setPressed(true) 
    let audio = new Audio(props.sound)
    audio.volume = props.volume;
    audio.play();

    setTimeout(() => 
      setPressed(false)
    , 50)
  }

  /* UseEffect para poder activar los botones con el teclado si la letra es la misma que prop.children*/
  useEffect(() => {
    
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === props.children.toLowerCase()){
        if (props.power) {  
          props.nameOnScreen(props.name) /*Imprime el nombre del sonido en pantalla*/
          play()}
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)

    return () => {
    
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [play, props]);

  /*Render del Drumpad*/
  return (
    <div className='pad'>
      <button className={`pad ${pressed ? 'pressed' : '' }`} 
        onClick={() => {
          if (props.power) {  
            props.nameOnScreen(props.name)
            play()
          }}}>
                
          {props.children}
                
      </button>
    </div>
  );
};

export default Pads;