import React from 'react'
import './homepage.css'
import OT from '../Media/OT2.jpg'

function homepage() {
    return (
        <div className='homepage-container'>
            <div className="homepage">
                <div className="intro">
                    <h1>Oliver<br/>Thomas</h1>
                    <h2>Web Developer</h2>
                    <ul className="social-links">
                        <li><a href="mailto: oliver.thomas93@icloud.com"><i class="far fa-envelope"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/oliver-thomas-41a5881a5/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/oliverthomas93"  target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></li>
                    </ul>
                </div>
                <img src={OT} alt="Oliver Thomas"/>
            </div>    
        </div>
    )
}

export default homepage
