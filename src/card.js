import React from "react";
import {
  Card,  
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import ChatRoom from "./chatRoom";
const Example = (props) => {
  const selectedSubject = props.subject;
  const selectedInstitute = props.institute;
  const selectedComments = props.comment

const handleClick = ()=>{
  localStorage.setItem("chatSubject", props.subject)
  localStorage.setItem("chatID", props.id)
}
  return (
    <>

      <Card style={{ display:"inline-block", width: "280px", marginLeft:'10px', marginRight:"10px", marginBottom:"20px" }}>
        <CardBody>
          <CardTitle tag="h5">{props.subject}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Semester
          </CardSubtitle>
          <CardText>{props.institute}</CardText>
          <Button href="/chatroom" onClick={handleClick} color="primary">Connect with faculty</Button>
        </CardBody>
      </Card>
      <div style={{display:"none"}}><ChatRoom selectedSubject={props.subject} selectedComments={selectedComments} selectedInstitute={selectedInstitute}/></div>
      
    </>
  );
};

export default Example;
