import React from 'react';
import { Container, Row, Col } from "reactstrap";
export default function StudentDetails(){
return(
  
  <>
<div style={{ fontSize: "1.25rem", color: "#3f51b5", textAlign:"center", padddingBottom:'20px' }}>Student Info</div>
      <Container>
        <Row>
          <Col xs="6">
            <div style={{fontWeight:"bold"}}>First Name: </div><div>Tony</div>
            <div style={{fontWeight:"bold"}}>Last Name: </div><div>Stark</div>
            <div style={{fontWeight:"bold"}}>Email address: </div><div>starkindustries@abc.com</div>
          </Col>

          <Col xs="6">
            <div style={{fontWeight:"bold"}}>Roll number: </div><div>18BEE109</div>
            <div style={{fontWeight:"bold"}}>Semester: </div><div>8</div>
            <div style={{fontWeight:"bold"}}>Institution:  </div><div>Nirma University</div>
          </Col>
         
        </Row>
      </Container>
      </>
)
}