import React from 'react'
import './Contact.css'
import 'animate.css'
import Github from '../../icons/github.svg'
import Discord from '../../icons/discord.svg'
import Twitter from '../../icons/twitter.svg'
import Linkedin from '../../icons/linkedin.svg'
import Toggle from '../../icons/toggle.svg'
import { Link } from 'react-router-dom'





const Contact = (props) => {

    function handleEmail() {
        return window.open("mailto:otolayinka@ualr.edu")
    }

    function handleGithub() {
        return window.open("https://github.com")
    }

    function handleDiscord() {
        return window.open("https://discordapp.com")
    }

    function handleTwitter() {
        return window.open("https://twitter.com")
    }

    function handleLinkedin() {
        return window.open("https://linkedin.com")
    }

    function handleClick() {
        return window.open('http://github.com/onakoyakayode')
    }


    const [toggleDisplay, setToggleDisplay] = React.useState(false)
   
    const styles = {
        left: toggleDisplay ? "0" : "-100%" 
    }

    return (
        <div className='new-header'>
            <div className='header-container'>
                <div className="contact-header-page">
                    <img onClick={() => setToggleDisplay(!toggleDisplay)} src={Toggle} className="toggle-button" alt="toggle-button"/>
                    <h1 className="header-title">{props.Title}</h1>
                    {
                        toggleDisplay && <ul style={styles} className='header-list'>
                        <h4><Link to='/'>{props.Home}</Link></h4>
                        <h4><Link to='/portfolio'>{props.Portfolio}</Link></h4>
                        <h4><Link to='/resume'>{props.Resume}</Link></h4>
                        <h4><Link to='/contact' onClick={() => setToggleDisplay(false)}>{props.Contact}</Link></h4>
                    </ul>
                    }
                </div>
                <div className='contact-container'>
                    <div className='contact-email animate__animated animate__backInLeft animate__delay-1s'>
                        <h5 className='contact-email-heading'>Have any project in mind? <span>Say hello at</span></h5>
                        <h2 onClick={handleEmail} className='contact-email-link'>otolayinka@ualr.edu</h2>
                    </div>
                    <div className="contact-socials animate__animated animate__bounceInDown animate__delay-2s">
                        <img onClick={handleGithub} src={Github} className="contact-socials-github" alt="github" />
                        <img onClick={handleDiscord}src={Discord} className="contact-socials-discord" alt="discord" />
                        <img onClick={handleTwitter}src={Twitter} className="contact-socials-twitter" alt="twitter" />
                        <img onClick={handleLinkedin}src={Linkedin} className="contact-socials-linkedin" alt="linkedin" />
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <small>&copy;Oluwakemi, 2022. Copyright reserved</small>
                <h3>Developed by <span onClick={handleClick}>Onakoya Kayode</span></h3>
            </footer>
        </div>
    )
}


export default Contact;