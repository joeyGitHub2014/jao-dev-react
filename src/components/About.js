import React from 'react'
import { useState, } from 'react'

const About = () => {
    const [state, setState] = useState(0)

     return (
    <div>
        <h1>Click button </h1>
        <button className ="button4" style={{backgroundColor:"#9a4ef1"}} onClick ={() => {setState(state+1);
                                console.log(state)}}>Set State</button>
 
    </div> 
    
    )
}

export default About
