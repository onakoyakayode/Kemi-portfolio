import React from 'react';
import './Header.css'
import myPic from '../../images/my-pic.jpg'
import 'animate.css'
import { Link } from 'react-router-dom'




const Header = () => {

    function handleClick() {
        return window.open('http://github.com/onakoyakayode')
    }

    return (
        <div>
            <header className="header-container">
                <div className="header-page-container">
                    <h1 className="header-title">TemiKemi</h1>
                    <ul className='header-list'>
                        <h4><Link to='/home'>Home</Link></h4>
                        <h4><Link to='/portfolio'>Portfolio</Link></h4>
                        <h4><Link to='/resume'>Resume</Link></h4>
                        <h4><Link to='/contact'>Contact</Link></h4>
                    </ul>
                </div>
                <div className='header-description'>
                    <div className='header-description-intro'>
                        <h1 className='header-description-title animate__animated animate__slideInLeft animate__delay'>Hi, I am<span>Olayinka Oluwakemi</span></h1>
                        <p className='header-intro animate__animated animate__slideInLeft animate__delay-1s'>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Asperiores eum deleniti et, corrupti voluptate perferendis ut qui vitae consequuntur nesciunt dolore at. Accusamus, illo sed similique autem perspiciatis illum dolores.</p>
                    </div>
                    <img src={myPic} style={{objectFit: "contain"}} className="header-img animate__animated animate__flipInX animate__delay-3s" alt="header" />
                </div>
            </header>
            <footer className='footer'>
                <small>&copy;Oluwakemi, 2022. Copyright reserved</small>
                <h3>Developed by <span onClick={handleClick}>Onakoya Kayode</span></h3>
            </footer>
        </div>
        
    )
}



export default Header;