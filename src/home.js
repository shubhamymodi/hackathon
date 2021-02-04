import React from "react"
import First from "./first";
import Second from "./second";
import Third from "./third";
import { Element } from "react-scroll";


export default function Home(){
return(
    <>
    <First/>
    <br/>
    <br/>
    
    <Element name="about">
        <Second />
    </Element>
    
    <Third />
   
    <Element name="contact">
        <h1 style={{display:"none"}}>Hello!</h1>
    </Element>
    
    </>
)
}