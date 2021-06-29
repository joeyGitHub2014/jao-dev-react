import React from 'react'
import { BrowserRouter as Router, Route  } from 'react-router-dom'

const Nav = () => {
    return (
        <Router>
            <div>
                <Route path='/'>Home</Route>
                <Route path='/'>Work</Route>
                <Route path='/'>About</Route>
                <Route path='/'>Resume</Route>
                <Route path='/'>Contact</Route>
            </div>
        </Router>
    )
}

export default Nav
