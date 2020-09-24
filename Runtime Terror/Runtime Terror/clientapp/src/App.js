import React from 'react';
import './App.css';
import Bar from './Navbar.js';
import MyCarousel from './MyCarousel.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">   
    <BrowserRouter>
     <Bar/>
     <Switch>
       <Route exact path = "/" component = {MyCarousel}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
