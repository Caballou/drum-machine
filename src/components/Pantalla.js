import React from 'react';
import '../stylesheets/Pantalla.css'

function Pantalla(props){
  return(
    <div className='screen'>
    {props.print}
  </div>
  );
};

export default Pantalla;