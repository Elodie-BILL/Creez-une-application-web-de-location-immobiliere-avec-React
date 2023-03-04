import React from "react";
import { Link } from "react-router-dom";
import LOGO from '../../assets/LOGO.svg';
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
                    <p id='accueil'> Accueil </p>
                </Link>
                <Link id='apropos' to="/apropos">
                    <p>A propos</p>
                </Link>
            </div>
        </header>
    )
}

export default Header;

// soulignement selon page

