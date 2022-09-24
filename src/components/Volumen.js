import React from "react";
import '../stylesheets/Volumen.css';

function Volumen(props) {

  return (
    <div className='slider-volumen'>
      Volume
      {props.power? 
      
      <input type='range' className='volume-on' min={0} max={1} step={0.02} value={props.volume} 
        onChange={event => { 
          props.nameOnScreen(Math.round(event.target.valueAsNumber * 100.00));
          props.changeVolume(event.target.valueAsNumber)
      }} />

      :

      <input type='range' className='volumen-off' disabled='true' value={props.volume}></input> }
    
    </div>
  )
};

export default Volumen;
