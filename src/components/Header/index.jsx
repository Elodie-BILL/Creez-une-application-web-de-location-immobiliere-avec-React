import React from "react";
import { Link, useLocation } from "react-router-dom";
import LOGO from '../../assets/LOGO.svg';
import './headerStyle.css';


function Header() {
    const location = useLocation();
    const path = location.pathname

    return (
        <header className="Home-header">
            <div className='Home-header_logo'>
                <img className="Logo"
                    src={LOGO}
                    alt="Représentation du logo de la marque Kasa"
                />
            </div>
            <div className='Home-header_nav'>
                <Link to="/" className={path === "/" && 'underline'}>
                    Accueil
                </Link>
                <Link to="/apropos" className={path === "/apropos" && 'underline'}>
                    A propos
                </Link>
            </div>
        </header>
    )
}

export default Header;

// soulignement selon page

