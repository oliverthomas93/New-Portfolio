import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about-container">
            <div className="about">
                <h1 id="scroll-to-top">About.</h1>
                <p>I've got a huge interest in all things tech related! Front end development is a particular passion of mine as it enables me to tap into my creative side whilst at the same time solve complex problems which I really thrive on. Most of my expertise are in HTML, CSS, Javascript, React and JQuery although I'm certainly not limited to those particular languages as I'm a very quick learner.

                I also love producing music which has been a mainstay in my life since I was about 14. There's something about seeing a project through from start to finish which can be extremely satisfying. When I'm not coding or writing music, I can usually be found eating cake or drinking coffee, ideally at the same time.</p>
                <div className="top">
                    <a href="#scroll-to-top"><i class="fas fa-chevron-up"></i></a>
                </div>
            </div>
        </div>
    )
}

export default About
