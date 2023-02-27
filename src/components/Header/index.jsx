import React from "react";
import { Link } from "react-router-dom";
import LOGO from './LOGO.jpg';
import './headerStyle.css';

function Header() {
    return (
        <header className="Home-header">
            <div className='Home-header_logo'>
                <img className="Logo"
                    src={LOGO}
                    alt="Représentation du logo de la marque Kasa"
                />
            </div>
            <div className='Home-header_nav'>
                <Link to="/">
                    <p id='underline'> Accueil </p>
                </Link>
                <Link to="/apropos">
                    <p>A propos</p>
                </Link>
            </div>
        </header>
    )
}

export default Header;

