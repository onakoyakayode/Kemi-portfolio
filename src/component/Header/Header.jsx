import React from 'react';
import './Header.css'
import myPic from '../../images/my-pic.jpg'
import Toggle from '../../icons/toggle.svg'
import 'animate.css'
import { Link } from 'react-router-dom'




const Header = (props) => {

    function handleClick() {
        return window.open('http://github.com/onakoyakayode')
    }

    const [toggleDisplay, setToggleDisplay] = React.useState(false)
    

    const styles = {
        left: toggleDisplay ? "0" : "-100%", 
    }


    return (
        <div className="new-header">
            <header className="header-container">
                <img onClick={() => setToggleDisplay(!toggleDisplay)} src={Toggle} className="toggle-button" alt="toggle-button"/>
                <div className="header-page-container">
                    <h1 className={"header-title"}>{props.Title}</h1>
                    {
                        toggleDisplay && <ul style={styles} className='header-list'>
                        <h4><Link to='/' onClick={() => setToggleDisplay(false)}>{props.Home}</Link></h4>
                        <h4><Link to='/portfolio'>{props.Portfolio}</Link></h4>
                        <h4><Link to='/resume'>{props.Resume}</Link></h4>
                        <h4><Link to='/contact'>{props.Contact}</Link></h4>
                    </ul>
                    }
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