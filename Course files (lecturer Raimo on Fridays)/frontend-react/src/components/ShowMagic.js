import React, { useState } from "react"
import Fun from './Fun';
import Greeting from './Greeting';
import Farewell from './Farewell'
import './App.css';

function ShowMagic() {
  const [magicNumber, setMagicNumber] = useState(0)
  const [show, setShow] = useState(true)
  const [leave, setLeave] = useState(false)

  if(!leave) {
    return (
      <div className="App">
        <Fun 
          magicNumber={magicNumber} 
          setMagicNumber={setMagicNumber}
          show={show}
          setShow={setShow}
        />
        <Fun 
          magicNumber={magicNumber} 
          setMagicNumber={setMagicNumber} 
          amount={5}
          show={show}
          setShow={setShow}
        />
        <Fun 
          magicNumber={magicNumber} 
          setMagicNumber={setMagicNumber} 
          amount={25}
          show={show}
          setShow={setShow}
        />
        { show && <h1>{ magicNumber }</h1> }
        <Greeting name="Anneli" age="33"/>
        <button onClick={() => setLeave(!leave)}>Leave!</button>
      </div>
    );
  }
  return (
    <div className="App">
      <Farewell
        leave={leave}
        setLeave={setLeave}
        name={"Anneli"}
      />
    </div>
  );
}

export default ShowMagic;
