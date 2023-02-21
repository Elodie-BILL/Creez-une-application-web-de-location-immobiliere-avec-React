import React from 'react'
import { Link } from "react-router-dom";
import errorImage from '../assets/404.png'

function Error() {
    return (

        <div className='error-pic' >
            <img
                src={errorImage}
                alt="affichant: error 404"
            />
            <p>Oups! La page que vous demandez n'existe pas.</p>

            <Link to="/">
                <p>Retourner sur le page d'accueil</p>
            </Link>
        </div>

    )
}



export default Error;