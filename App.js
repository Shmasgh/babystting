import React, { Component } from 'react';
import './App.css';
import Navbar from './Component/Home/Navbar'
import Signup from './Component/Home/Routes/Signup'
import { BrowserRouter, Route } from 'react-router-dom'
import Dashbords from "./Component/Profilepage/Routes"

class App extends Component {
  render() {
    return (
      <div >


        <BrowserRouter>
          <div>
            {/* <Navbar /> */}
            <Route exact path="/" component={Navbar} />
            <Route path="/user" component={Dashbords} />
            <Route path="/Signup" component={Signup} />

          </div>

        </BrowserRouter>


      </div>
    );
  }
}

export default App;
