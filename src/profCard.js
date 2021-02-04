import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const ProfCard = (props) => {
  return (
    <Card
      style={{
        display: "inline-block",
        width: "280px",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "20px"
      }}
    >
      <CardBody>
        <CardTitle tag="h5">Subject</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Semester
        </CardSubtitle>
        <CardText>Institution</CardText>
        <Button href="/chatroom" color="primary">Connect with students</Button>
      </CardBody>
    </Card>
  );
};

export default ProfCard;
