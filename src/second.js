import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import uni from "../src/images/uni.jpg";
import { Container, Row, Col } from "reactstrap";
import "./first.css";
import First from "./first";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Second() {
  const classes = useStyles();
return(
    <div className={classes.root}>
    
    <Grid style={{float:"left"}} item xs={12} sm={6}>
    <img src={uni} alt="post-img" className="div-img"/>
    </Grid>
    <Grid style={{float:"right", paddingTop:'100px', paddingRight:"400px"}} item xs={12} sm={6}>
        <div className="preHeading">About the Mentor Mate</div>
        <div className="about">
        Established in 1920, University of El Dorado has long been a home to critical thinking, progressive education, and a conscientious community. The school is committed to pushing positive change and creating a caring world for everyone.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </div>
    </Grid>
    
    </div>

    // <>
    // <Container>
    //     <Row>
    //         <Col xs="12" sm="6">
    //         <img src={uni} alt="post-img" className="div-img"/>
    //         </Col>
    //         <Col  xs="12" sm="6">
    //         <div className="preHeading">About the Mentor Mate</div>
    //         </Col>
    //     </Row>
    // </Container>
    // </>
)
}
