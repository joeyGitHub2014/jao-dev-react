import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Projects from './components/Projects'
import About from './components/About'

//import { useState, useEffect } from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() { 
  return (
    <div className="App"  >
      <Nav className=""/>
      <Header className="App-header"/>
      <About />    
      <Projects className=""/>
      <Footer className=""/>
     </div> 
  );
}

export default App;
