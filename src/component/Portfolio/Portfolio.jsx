import React from "react";
import './Portfolio.css';
import ErrandHQ from "../../images/ErrandHQ.png"
import TAFabrics from "../../images/T.A-Fabrics.png"
import Toggle from '../../icons/toggle.svg'
import 'animate.css'
import { Link } from 'react-router-dom'


const Portfolio = (props) => {
    const ErrandHq = () => {
        return window.open('https://www.google.com')
    }
    
    function handleClick() {
        return window.open('http://github.com/onakoyakayode')
    }

    const [toggleDisplay, setToggleDisplay] = React.useState(true)
   
    const styles = {
        left: toggleDisplay ? "0" : "-100%" 
    }

    const handleToggle = () => {
        setToggleDisplay(toggleDisplay => !toggleDisplay)
    }


    return (
        <div className="new-header">
            <div className="header-container">
                <img onClick={handleToggle} src={Toggle} className="toggle-button" alt="toggle-button"/>
                <div className="portfolio-header-page">
                    <h1 className="header-title">{props.Title}</h1>
                    <ul style={styles} className='header-list'>
                        <h4><Link to='/'>{props.Home}</Link></h4>
                        <h4><Link to='/portfolio'>{props.Portfolio}</Link></h4>
                        <h4><Link to='/resume'>{props.Resume}</Link></h4>
                        <h4><Link to='/contact'>{props.Contact}</Link></h4>
                    </ul>
                </div>
                <div className="projects-container">
                    <div className="projects-list animate__animated animate__slideInUp">
                        <img src={ErrandHQ} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading">ErrandHQ</h4>
                    </div>
                    <div className="projects-list animate__animated animate__slideInUp animate__delay-1s">
                        <img src={TAFabrics} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading1">ErrandHQ</h4>
                    </div>
                    <div className="projects-list animate__animated animate__slideInUp animate__delay-2s">
                        <img src={ErrandHQ} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading2">ErrandHQ</h4>
                    </div>
                    <div className="projects-list animate__animated animate__slideInUp animate__delay-3s">
                        <img src={TAFabrics} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading3">ErrandHQ</h4>
                    </div>
                    <div className="projects-list animate__animated animate__slideInUp animate__delay-4s">
                        <img src={ErrandHQ} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading4">ErrandHQ</h4>
                    </div>
                    <div className="projects-list animate__animated animate__slideInUp animate__delay-5s">
                        <img src={TAFabrics} className="project-img" alt="Project-link" />
                        <h4 onClick={ErrandHq} className="project-heading5">ErrandHQ</h4>
                    </div>
                </div>
                {/* <div className="resume-link">
                    <h4><Link to='/resume'>Resume</Link></h4>
                </div> */}
            </div>
            <footer className='footer'>
                <small>&copy;Oluwakemi, 2022. Copyright reserved</small>
                <h3>Developed by <span onClick={handleClick}>Onakoya Kayode</span></h3>
            </footer>
        </div>
    )
}




export default Portfolio;

