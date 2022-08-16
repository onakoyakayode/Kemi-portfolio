import React from "react";
import './Portfolio.css';
import ErrandHQ from "../../images/ErrandHQ.png"
import TAFabrics from "../../images/T.A-Fabrics.png"
import { Link } from 'react-router-dom'


const Portfolio = () => {

    const ErrandHq = () => {
        return window.open('https://www.google.com')
    }
    
    function handleClick() {
        return window.open('http://github.com/onakoyakayode')
    }


    return (
        <div>
            <div className="header-container">
                <div className="portfolio-header-page">
                    <h1 className="header-title">TemiKemi</h1>
                    <ul className='header-list'>
                        <h4><Link to='/home'>Home</Link></h4>
                        <h4><Link to='/portfolio'>Portfolio</Link></h4>
                        <h4><Link to='/resume'>Resume</Link></h4>
                        <h4><Link to='/contact'>Contact</Link></h4>
                    </ul>
                </div>
                <div className="projects-container">
                    <div className="projects-list">
                        <img src={ErrandHQ} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading">ErrandHQ</h4>
                    </div>
                    <div className="projects-list">
                        <img src={TAFabrics} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading1">ErrandHQ</h4>
                    </div>
                    <div className="projects-list">
                        <img src={ErrandHQ} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading2">ErrandHQ</h4>
                    </div>
                    <div className="projects-list">
                        <img src={TAFabrics} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading3">ErrandHQ</h4>
                    </div>
                    <div className="projects-list">
                        <img src={ErrandHQ} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading4">ErrandHQ</h4>
                    </div>
                    <div className="projects-list">
                        <img src={TAFabrics} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading5">ErrandHQ</h4>
                    </div>
                </div>
                <div className="resume-link">
                    <h4><Link to='/resume'>Resume</Link></h4>
                </div>
            </div>
            <footer className='footer'>
                <small>&copy;Oluwakemi, 2022. Copyright reserved</small>
                <h3>Developed by <span onClick={handleClick}>Onakoya Kayode</span></h3>
            </footer>
        </div>
    )
}




export default Portfolio;

