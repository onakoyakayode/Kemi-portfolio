import React from "react";
import 'animate.css'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="header">
            <div className="header-details">
                <h1 className="header-title animate__animated animate__zoomInUp animate__delay-1s">Olayinka Oluwakemi</h1>
                <h3 className="header-description animate__animated animate__bounceInUp animate__delay-2s">A Product Manager</h3>
                <h4 className="header-link animate__animated animate__bounceInUp animate__delay-3s"><Link to='/header'>Say Hi</Link></h4>
            </div>
        </div>
    )
}



export default Home;