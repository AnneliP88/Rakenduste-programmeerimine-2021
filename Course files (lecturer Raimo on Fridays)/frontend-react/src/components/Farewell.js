import React from "react";

function Farewell({leave, setLeave, name}){

  return(
    <>
      {leave && (
        <div>
          <img className="Farewell-bye-pic" src="./Sad Kitty.jpg" alt="Sad Kitty"/>
          <br/><br/>
          <p>It's sad to see you go, {name}!!!</p>
          <button onClick={() => setLeave(!leave)}>Noo...wait. I wanna go back!!!!</button>
        </div>
      )}
    </>
  )
}

export default Farewell;