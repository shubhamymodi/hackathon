import React from "react";
import contact from "./images/contact.jpg"
import { Container, Row, Col } from "reactstrap";
import "./first.css";
export default function Third(){
    return(
        <>
        
        <img className="contactImage" src={contact} alt="img"/>
        <div style={{float:"left", paddingTop:"30px", paddingBottom:"50px"}}>
        <div className="preHeading">
            Contact <br/>Information
        </div>
        <div style={{paddingTop:"10px", fontSize:"18px"}} className="about">
            How to get in touch with us.
        </div>
        </div>
        <Container style={{float:"right", paddingTop:"120px"}}>
        <Row style={{margin:"0"}}>
            <Col style={{paddingRight:"0"}}>
                <div className="contactText">PHONE NUMBER</div>
            </Col>
            <Col style={{paddingLeft:"0", paddingRight:"0"}}>
                <div className="contactText">EMAIL ADDRESS</div>
            </Col>
            <Col style={{paddingLeft:"0"}}>
                <div className="contactText">MAILING ADDRESS</div>
            </Col>
        </Row>
        <Row style={{margin:"0"}}>
            <Col style={{paddingRight:"0"}}>
                <div style={{fontSize:"16px"}}>(123) 456-7890</div>
            </Col>
            <Col style={{paddingRight:"0", paddingLeft:"0"}}>
                <div style={{fontSize:"16px"}}>hello@reallygreatsite.com</div>
            </Col>
            <Col style={{paddingLeft:"0"}}>
                <div style={{fontSize:"16px"}}>123 Anywhere St. Any City, ST 12345</div>
            </Col>
        </Row>
        </Container>

        
        </>
    )
}

