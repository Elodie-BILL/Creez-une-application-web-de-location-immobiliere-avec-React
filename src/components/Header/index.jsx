import React from "react";
import { Link } from "react-router-dom";
import LOGO from './LOGO.jpg';
import './headerStyle.css';



const Logo = {
    src: LOGO,
    alt: "Représentation du logo de la marque Kasa"
}

const nav = {
    div1: "Accueil",
    div2: "A propos"
}

function Header() {
    return (
        <header className="Home-header">
            <div className='Home-header_logo'>
                <img className="Logo"
                    src={Logo.src}
                    alt={Logo.alt}
                />
            </div>
            <div className='Home-header_nav'>
                <Link to="/">
                    <p id='underline'> {nav.div1} </p>
                </Link>
                <Link to="/error404">
                    <p>{nav.div2} </p>
                </Link>
            </div>
        </header>
    )
}

export default Header;

