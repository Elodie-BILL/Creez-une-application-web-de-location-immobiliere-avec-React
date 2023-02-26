import React from 'react'
import { Link } from "react-router-dom";
import Style from "./ErrorStyle.css"



function Error({ srcImg, altImg, textEr }) {
    return (

        <div className='error-pic' >
            <img
                src={srcImg}
                alt={altImg}
            />
            <p>{textEr}</p>

            <Link to="/">
                <p>Retourner sur le page d'accueil</p>
            </Link>
        </div>

    )
}



export default Error;