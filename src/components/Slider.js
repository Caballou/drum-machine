import React from "react";
import '../stylesheets/Slider.css'


function Slider(props) {

  const esPower = (valor) => {
    return (valor === 'power');
  }

  return (
    <div className='slider-full'>
      {props.children}
      <div className={`slider ${esPower(props.type) ? 'slider-power' : 'slider-bank'}`} 
    onClick={() => 
      {if (esPower(props.type)) { /* Si el slider es de tipo 'power', prende o apaga la drum machine */
        props.powerClick()
      } else if (props.power) { /*Si no es de tipo 'power' (o sea, es 'bank') y además, el power está activado, cambia de bank*/
        props.bankClick(); 
        props.nameOnScreen(props.name); 
      }
    }}>

      <div className={`left-container ${props.active === 'bank 1' || props.active === false ? 'slider-on' : 'slider-off'}`}>
      </div>
      
      <div className={`right-container ${props.active === 'bank 2' || props.active === true ? 'slider-on' : 'slider-off'}`}>
      </div>
      
    </div>
    </div>
    
  )
}

export default Slider;
