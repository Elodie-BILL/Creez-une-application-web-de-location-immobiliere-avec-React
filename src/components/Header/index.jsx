import React from "react";
import ReactDOM from "react-dom";
import LOGO from '..Header/LOGO';


const Logo = {
    src: { LOGO },
    alt: "Représentation du logo de la marque Kasa"

}

const nav = {
    div1: "Accueil",
    div2: "A propos"

}

function Header() {

    <header className="Home-header">
        <div className='Home-header_logo'>
            <img className="Logo"
                src={Logo.src}
                alt={Logo.alt}
            />
        </div>
        <div className='Home-header_nav'>
            <p id='underline'> {nav.div1} </p>
            <p>{nav.div2} </p>
        </div>
    </header>

}

export default Header;

