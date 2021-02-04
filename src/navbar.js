import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {Link} from "react-router-dom";
import "./first.css";
import { scroller } from "react-scroll";

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1200,
      delay: 100,
      smooth: true,
      offset: -90,
    });
  };
    
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor:"#000", opacity:"0.8"}} position="fixed">
        <Toolbar>
         
         <a style={{textDecoration:"none"}} href="/signup" className="butn warning">
        {/* <button class="butn warning">Signup</button> */}
        Signup
        </a>

        <a className="loginBtn" style={{textDecoration:"none"}} href="/login">
         {/* <Typography className="loginBtn" >Login</Typography> */}
         Login
         </a>
         <Typography onClick={() => scrollToElement("contact")} style={{right:"400px"}} className="loginBtn" >Contact</Typography>

         {/* <Link to="/contact">
         <Typography style={{right:"400px"}} className="loginBtn" >Contact</Typography>
         </Link> */}
         
         <Typography onClick={() => scrollToElement("about")} style={{right:"520px"}} className="loginBtn" >About</Typography>

         {/* <Link to="/about">
         <Typography style={{right:"520px"}} className="loginBtn" >About</Typography>
         </Link> */}
        
         <>
         <div className="mentor">Mentor</div> <div className="mate"> Mate</div>
         </>
         
        {/* <Button  style={{position:"absolute", right:"100px", borderRadius:"20px"}} variant="outlined" color="primary">
          Sign up
          </Button> */}
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
