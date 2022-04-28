import React from 'react';
import './Projects.css';
import sn from '../Media/samnoblept(update).png';
import db from '../Media/Dashboard.jpeg';
import listify from '../Media/Listify.png';
import v2 from '../Media/DadV2.png';

function Projects() {
    return (
        <div className="projects-container">
            <div className="projects">
                <h1>Projects.</h1>
                <div className="projects-info">
                    <div class="accordion accordion-flush">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    SN Personal Training
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">

                                <div class="accordion-body"><a href='https://samnoblept.co.uk/' target='_blank'><img src={sn}></img></a>The client wanted a simple one page website that had all the information his potential clients might need, whilst remaining uncluttered and easy to navigate. To stay in keeping with his chosen black and white hero image, color is used sparingly to create a sleek and simple design, whilst remaining eyecatching and functional. The page is also fully optimised for mobile devices.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Dashboard
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><a href='https://oliverthomas93.github.io/Dashboard/' target='_blank'><img src={db}></img></a>A mobile dashboard web application I built in order to practise pulling data from third party api's to update functional widgets.
                                    The top greeting will change depending on the time of day. The QOTD widget delivers a different inspirational quote everyday. The weather widget uses the OpenWeather api to deliver live weather results based on the users geographical location. Finally the news widget at the bottom uses the Guardian News api to fetch the three top news stories in the UK at any given time.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Listify
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><a href='https://oliverthomas93.github.io/Listify/' target='_blank'><img src={listify}></img></a>A simple 'todo list' web application.
                                    This paticular application utilizes your devices local storage to save your todos so that they are not lost once the page is refreshed. The check mark button ensures that you know which tasks have been completed and the delete button allows you to clear them once they are no longer needed.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    LT Photography
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><a href='https://oliverthomas93.github.io/corporate-photography-website/' target='_blank'><img src={v2}></img></a>For this particular project, the client wanted a landing page that was able to highlight some of their work as soon as the page loaded.
                                    I made effective use of an infinite slideshow loop as a full width background which I think works really well. The page is also fully mobile responsive and utilises a disappearing navigation bar to declutter the limited screen real estate of smaller devices.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
