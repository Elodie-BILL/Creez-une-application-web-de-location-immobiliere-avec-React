import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerImg from '../../assets/AproposImg.png';
import Collapse from "../../components/Collapse/Collapse";
import "../../components/Collapse/Collapse.css"
import "../Apropos/Apropos.css"



function Apropos() {


    return (
        <React.Fragment >

            <Banner srcImage={bannerImg} altImage="Image de paysage mongtagneur " />

            <section className="globalDiv_Collapse">
                <Collapse title="Fiabilité" texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />

                <Collapse title="Respect" texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />

                <Collapse title="Service" texte="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />

                <Collapse title="Sécurité" texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </section>


        </React.Fragment>
    )
}

export default Apropos;