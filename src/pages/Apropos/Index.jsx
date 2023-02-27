import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerImg from '../../assets/AproposImg.png'; import Footer from "../../components/Footer/Footer";
import TexteApropos from "../../components/Collapse";
import Vector from "../../assets/Vector.png"


function Apropos() {


    return (
        <React.Fragment>
            <Banner srcImage={bannerImg} altImage="Image de paysage mongtagneur " />

            <TexteApropos srcImg={Vector} texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />

            <TexteApropos title="Fiabilité" srcImg={Vector} texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />

            <TexteApropos title="Fiabilité" srcImg={Vector} texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />

            <TexteApropos title="Fiabilité" srcImg={Vector} texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />

            <TexteApropos title="Fiabilité" srcImg={Vector} texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />


        </React.Fragment>
    )

}
            
export default Apropos