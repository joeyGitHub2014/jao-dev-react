import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Projects from './components/Projects'
import About from './components/About'
import Isotope from 'isotope-layout'
import axios from 'axios'
import { useState, useEffect } from 'react'

//import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  const [imageNames, setNames] = useState([]);
  const [isotope, setIsotope] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  console.log(React.createElement);


  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://localhost:3000/json/projectInfo.json`)
      console.log(result.data)
      setNames(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      setIsotope(
        new Isotope('.filter-container', {// filter-container: className of the parent of the isotope elements
          itemSelector: '.filter-item', // filter-item: className of the isotope elements
          layoutMode: 'masonry',          // for horizontal isotope
        })
      )
    }
  }, [isLoading])

  return (
    <div className="App"  >
      <Nav />
      <Header className="App-header" />
      <About />
      <Projects imageNames={imageNames} isotope={isotope} isLoading={isLoading} />
      <Footer />
    </div>
  );
}

export default App;
