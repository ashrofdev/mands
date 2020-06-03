import React, { Component } from 'react';
import './App.css'
import LandingPage from './Components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './Components/LittleComponents/Signin';
import Register from './Components/LittleComponents/Register';
import Blog from './Components/Blog/Blog';

class App extends Component {

  state = {
    blogs: ['Medicinal money ritual',
    'How to kill yourself and Medicinal money ritual',
    'Benefits of bad diet',
    'Advantages of going crazy',
    'HIV is unreal',
    'Corona is fake',]
  }


  render() {
    return (
      <Router>
          <div>
            <Switch>
              <Route path="/signin">
                  <Login authUser={this.authUser} loading={this.state.loading} 
                  redirect={this.state.redirect}/>
              </Route>
              <Route path="/register">
                  <Register register={this.register} loading={this.state.loading} 
                  redirect={this.state.redirect} />
              </Route>
              {
                this.state.blogs.map(e=>{
                  return <Route path={`/${e}`}>
                    <div>
                      <Blog title={e}/>
                    </div>
                  </Route>
                })
              }
              <Route path="/">
                <LandingPage name={'landing'}/>
              </Route>
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;