import React from 'react'
import { Link } from "react-router-dom";
import ImgEr from "../../assets/404.svg"
import "../Error/Error.css"


const Error = () => {
    return (
        <section className='section_errorPage'>
            <img className='ErrorImg' src={ImgEr} alt="error 404 " />
            <p className='Error_p'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='ErrorLink_endpage' to="/">
                Retourner sur la page d'accueil
            </Link>
        </section>

    )
}



export default Error;