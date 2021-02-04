import React from 'react'
import { Route, Switch } from 'react-router-dom'
import First from "../first";
import Second from "../second";
import Third from "../third";
import Login from "../login";
import SignUp from "../signup";
export default function Router(){
    return(
        <div>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
            </Switch>
        </div>
    )
}