import React from "react";
import bg from "./images/bg.jpg";
import First from "./first";
import Second from "./second";
import Third from "./third";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Element } from "react-scroll";
// import Router from "./Routes/router";
import Login from "./login";
import Home from "./home";
import SignUp from "./signup";
import StudentDashboard from "./studentDashboard";
import ChatRoom from "./chatRoom";
import ProfDashboard from "./profDashboard";
import VideoCall from "./jitsi";
export default function App() {
  return (
    <div className="App" >
   
    <Router>
    
    <Switch>

    
      <Route path="/" exact component={Home} />
      <Route  path="/login" exact component={Login}/>
      <Route  path="/signup" exact component={SignUp}/>
      <Route path="/student/dashboard" exact component={StudentDashboard}/>
      <Route path="/chatroom" exact component={ChatRoom}/>
      <Route path="/prof/dashboard" exact component={ProfDashboard}/>
      <Route path="/videocall" exact component={VideoCall}/>
    </Switch>

    </Router>
   
    {/* <First/>
    <br/>
    <br/>
    
    <Element name="about">
        <Second />
    </Element>
    
    <Third />
   
    <Element name="contact">
        <h1 style={{display:"none"}}>Hello!</h1>
    </Element> */}
   
    </div>
  );
}
