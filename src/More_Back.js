import { useState } from "react";
import More from "./More";
import Home from "./Home";

function More_Back(){
    const[mb,setMb]=useState(false);
    function setmb(){
        setMb(true);
    }
    return(
        <> 
        {
            mb?<Home/>:<More fn={setmb}/>
        }
        </>
    )
}
export default More_Back;