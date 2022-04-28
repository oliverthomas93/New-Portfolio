import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

function navbar() {
    function handleClick() {
        let navLinks = document.querySelector('.navlinks');
        let wheel = document.querySelector('.wheel');
        navLinks.classList.toggle('reveal');
        wheel.classList.toggle('spin');
    }
    function removeClass() {
        let navLinks = document.querySelector('.navlinks');
        let wheel = document.querySelector('.wheel');
        navLinks.classList.remove('reveal');
        wheel.classList.remove('spin');
    }
    return (
        <div className="nav-container">
            <div className="nav">
                <Link to="/"><i class="fas fa-home" onClick={removeClass}></i></Link>
                <ul className="navlinks">
                    <Link to="/projects"><li onClick={removeClass}>Projects.</li></Link>
                    <Link to="/about"><li onClick={removeClass}>About.</li></Link>
                    <Link to="/contact"><li onClick={removeClass}>Contact.</li></Link>
                </ul>
                <i class="fas fa-dharmachakra wheel" onClick={handleClick}></i>
            </div>
        </div>
    )
}

export default navbar
