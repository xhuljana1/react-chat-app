import React, {Component} from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import chat from './lib/chat';

import { Login, Groupchat } from "./components"


class App extends Component{
  constructor(props){
  super(props)
  chat.init()
  }
  render(){
    return(
      <Switch>
        <Redirect exact from="/" to="/login"/>
        <Route path="/login" component={Login} />
        <Route path="/chat" component={Groupchat}/>
      </Switch>
    )
  }
}

export default App;
