import React from 'react';
import './App.css';
import Pads from './components/Pads';
import Slider from './components/Slider';
import Pantalla from './components/Pantalla';
import Volumen from './components/Volumen';
import drumkit1 from './drumkit1';
import drumkit2 from './drumkit2';
import { useState } from 'react';


function App() {

  const [power, setPower] = useState(true);
  const [bank, setBank] = useState('bank 1');
  const [name, setName] = useState('')
  const [volume, setVolume] = useState(0.5)

  const powerOffOn = () => {
    setPower(!power);
    setName('');
    console.log(power);
  }

  const changeBank = () => {
    bank === 'bank 1' ? setBank('bank 2') : setBank('bank 1');
    console.log(bank);
  }

  const printName = (val) => {
    setName(val);
  }

  const changeVolume = (val) => {
    setVolume(val);
  }

  return (
    <div className='App'>
      <div className='contenedor-principal'>
    
        <div className='contenedor-botones'>
          { bank === 'bank 1' ? 
            drumkit1.map(drumkit => (
              <Pads {...drumkit} power={power} name={drumkit.name} key={drumkit.key} 
              sound={drumkit.sound} nameOnScreen={printName} volume={volume}
              >
                {drumkit.key}
              </Pads>
            )) 
            :
            drumkit2.map(drumkit => (
              <Pads {...drumkit} power={power} name={drumkit.name} key={drumkit.key} 
              sound={drumkit.sound} nameOnScreen={printName} volume={volume}
              >
                {drumkit.key}
              </Pads>
            )) 
          }
        </div>

        <div className='contenedor-controles'>

          <Slider type='power' powerClick={powerOffOn} active={power}>Power</Slider>
          
          <Pantalla print={name} />
 
          <Volumen power={power} volume={volume} changeVolume={changeVolume} nameOnScreen={printName} />
          
          <Slider power={power} type='bank' name={bank==='bank 2' ? 'Acoustic Drum' : 'Electronic Drum'} 
          bankClick={changeBank} active={bank} nameOnScreen={printName}>Bank</Slider>
         
        </div>

      </div>
      <div className='firma'>
      by Caballou 🐴
      </div>
    </div>
  );
}

export default App;
