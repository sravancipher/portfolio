import {useState } from "react";
import About from "./About";
import More_Back from './More_Back';
import Footer from './Footer';
import './Home.css'
function Home() {
    const[contact,setContact]=useState(false)
    function check(){
        setContact(true);
      }
    return(
        <>
        {
            contact?<More_Back/>:<About fn={check}/>
            
        }
        <span className="footer w-100 d-block m-auto" ><Footer/></span>   
        
        </>
    )
}
export default Home;