import React from 'react';
import './Resume.css'
import resume from '../../resume/OluwakemiResume.pdf';
import Toggle from '../../icons/toggle-white.svg'
import 'animate.css'
import { Link } from 'react-router-dom'




const Resume = (props) => {

    function handleClick() {
        return window.open('http://github.com/onakoyakayode')
    }

    return (
        <div className='new-header'>
            <div className='header-container resume-container' id='resume-id'>
                <div className="resume-header-page">
                    <img src={Toggle} className="toggle-button" alt="toggle-button"/>
                    <h1 className="header-title">{props.Title}</h1>
                    <ul className='header-list header-resume-list' id='header-resume-list'>
                        <h4><Link to='/'>{props.Home}</Link></h4>
                        <h4><Link to='/portfolio'>{props.Portfolio}</Link></h4>
                        <h4><Link to='/resume'>{props.Resume}</Link></h4>
                        <h4><Link to='/contact'>{props.Contact}</Link></h4>
                    </ul>
                </div>
                <div className="resume-description">
                    <div className='resume-description-container animate__animated animate__backInLeft animate__delay-1s'>
                        <h3 className="resume-description-details">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis explicabo doloribus, quaerat dicta nesciunt sapiente. Reprehenderit corrupti eum?</h3>
                        <ul className='resume-description-list'>
                            <li>Amazon Prime</li>
                            <li>Facebook</li>
                            <li>Tesla</li>
                            <li>Microsoft</li>
                            <li>Google</li>
                        </ul>
                    </div>
                    <div className='resume-download-link'>
                        <Link download={resume} to={resume} className='resume-download animate__animated animate__bounce animate__delay-2s'>Download Resume</Link>
                        <Link to={resume} target='_blank' className='resume-view animate__animated animate__bounce animate__delay-3s'>View CV</Link>
                    </div>
                </div>
            </div>
            <footer className='footer resume-footer'>
                <small>&copy;Oluwakemi, 2022. Copyright reserved</small>
                <h3>Developed by <span onClick={handleClick}>Onakoya Kayode</span></h3>
            </footer>
        </div>
    )
}


export default Resume;