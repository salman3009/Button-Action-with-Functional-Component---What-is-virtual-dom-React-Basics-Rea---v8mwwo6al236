import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  
  const [getFlag,setFlag] = useState(false);

  return (
    <div id="main">
      // Do not alter the main div
      {getFlag && <p id="para"> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id="click" onClick={()=>setFlag(!getFlag)}>click</button>
    </div>
  );
}


export default App;
