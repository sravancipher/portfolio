import { useState } from 'react';
import Opening from './Opening';
import Home from './Home';
import More from './More';
import Footer from './Footer';
function App() {
  let s1 = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -2,
    objectFit: "cover"
}
let s2 = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
}
  const[display,setDisplay]=useState(false);
  function check(val){
    setDisplay(val);
  }
  return (
    <>
    <div style={s1}>
                <video autoPlay muted loop style={s2}>
                    <source src="homebg.mp4" type="video/mp4" />
                </video>

            </div>
      {
        display?(<Home/>):<Opening fn={check}/>
        
      }

    </>
  );
}

export default App;
