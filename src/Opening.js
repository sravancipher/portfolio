import React, { useState } from 'react';
import Button from '@mui/material/Button'
import { Backdrop, CircularProgress } from '@mui/material';
import Footer from './Footer';
function Opening(props) {
    let s1 = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: "0.8",
    }
    let s2 = {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    }
    let s3 = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 128, 0.3)"
    }
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setAos(true);  //aos
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        props.fn(true);
      }, 1000);
      
    };
    const [Aos, setAos] = useState(false);
    return (
        <>
            <div style={s1}>
                <video autoPlay muted loop style={s2}>
                    <source src="homebg.mp4" type="video/mp4" />
                </video>
                <div style={s3}></div>
            </div>
            <Button  data-aos="zoom-in" data-aos-duration="2000" variant="contained" size="large" className='bg-danger d-block m-auto' style={{ position: "relative", top: "50vh"}} 
            onClick={handleClick}
            >Know Me</Button>
            <Backdrop open={open} style={{ zIndex: 5, color: '#fff' }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      
      
        </>

    )
}
export default Opening;