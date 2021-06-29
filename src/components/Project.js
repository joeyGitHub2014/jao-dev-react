import React from 'react'
import classes from './Project.module.css'

const Project = ({name}) => {
    const imageStyle = {
        width: '309px',
    }
    return (
        <div   className={name.filter}>
            <div className ={classes.imgoverlay}>
                <img style={imageStyle} src={name.imageName} alt={name.alt} />
                <div className={classes.overlay}>
                    <span className={classes.overlaycolor}></span>     
                </div>
            </div>
        </div>
    )
}

export default Project
