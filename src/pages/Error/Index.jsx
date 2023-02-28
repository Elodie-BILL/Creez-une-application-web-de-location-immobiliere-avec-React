import React from 'react'
import { Link } from "react-router-dom";
import ImgEr from "../../assets/404.png"
import "../Error/Error.css"


const Error = () => {
    return (
        <section className='section_errorPage'>
            <img className='ErrorImg' src={ImgEr} alt="error 404 " />
            <p className='Error_p'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='ErrorLink_endpage' to="/">
                <p>Retourner sur la page d'accueil</p>
            </Link>
        </section>

    )
}



export default Error;