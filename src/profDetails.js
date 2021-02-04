import React from "react";
import { Container, Row, Col } from "reactstrap";
export default function ProfDetails() {
  return (
    <>
      <div style={{ fontSize: "1.25rem", color: "#3f51b5" }}>Student Info</div>
      <Container>
        <Row>
          <Col xs="6">
            <div style={{ fontWeight: "bold" }}>First Name: </div>
            <div>Tony</div>
            <div style={{ fontWeight: "bold" }}>Last Name: </div>
            <div>Stark</div>
            <div style={{ fontWeight: "bold" }}>Email address: </div>
            <div>starkindustries@abc.com</div>
          </Col>

          <Col xs="6">
            <div style={{ fontWeight: "bold" }}>ID: </div>
            <div>15EE15</div>
            <div style={{ fontWeight: "bold" }}>Subjects: </div>
            <div>Engineering Maths</div>
            <div style={{ fontWeight: "bold" }}>Institution: </div>
            <div>Nirma University</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
