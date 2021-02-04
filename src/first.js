import React from "react";
import bg from "./images/bg.jpg";
import Navbar from "./navbar";
import "./first.css";
import { scroller } from "react-scroll";
import Button from '@material-ui/core/Button';

import { Element } from "react-scroll";

const scrollToElement = (element) => {
  scroller.scrollTo(element, {
    duration: 1200,
    delay: 100,
    smooth: true,
    offset: -90,
  });
};

function First() {
  
  return (
    <div 
      
    >
      
      <img src={bg} alt="bg" style={{zIndex: "-1", width:"100%", height:"800px",filter: "brightness(0.5)"}} />
      <Navbar/>
      <h1 className="heading">MENTOR MATE</h1>

      
      <Button onClick={() => scrollToElement("contact")} style={{backgroundColor:"#4b39b5",color:"#fff",position: "absolute", top: "60%",left: "50%",
  transform: "translate(-50%, -50%)"  }} variant="contained">Want to get your institute registered?  </Button>
    
      
      
    </div>
  );
}

export default First;
