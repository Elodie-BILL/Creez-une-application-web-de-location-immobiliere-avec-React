import React from 'react'
import '../style/Home.css'
import Header from '../components/Header'
import error from '../assets/404.png'


const DataEr = {
    src: { error },
    alt: " image affichant: error 404 ",
    sentence1: "Oups! La page que vous demandez n'existe pas.",
    backToHome: "Retourner sur le page d'accueil."

}

function Error404(props) {
    return (

        <div className='error-pic'>
            <img
                src={DataEr.src}
                alt={DataEr.alt} />
            <p> {DataEr.sentence1}</p>

            <a href="./Homes.jsx">
                <p>{DataEr.backToHome}</p>
            </a>
        </div>
    )
}

Error404();

export default Error404;