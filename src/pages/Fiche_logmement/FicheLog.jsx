import React from "react";
import Carrousel from "../../components/Fiche_logement/Carrousel/Caroussel";
import DataContent from "../../components/Fiche_logement/DataContent/DataContent"
import { useParams } from "react-router-dom";
import data from "../../data/data.json"
import Collapse from "../../components/Collapse/Index";
import DisplayRating from "../../components/Fiche_logement/Rating/Rating";
import DataHost from "../../components/Fiche_logement/Host/Host";
import "./Fiche_log.css"




function FicheLogement() {

    const { id } = useParams();

    const findLogement = data.find((logement) => {
        return logement.id === id;
    })

    const tagContent = findLogement.tags.map((tag, index) => <p key={index}> {tag}</p>);
    const equipementContent = findLogement.equipments.map((equipment, index) => (<p key={index}>{equipment}</p>))



    return (
        <React.Fragment>

            <Carrousel srcImg={findLogement.pictures} />
            <div className="titleRateHost">

                <div className="titleDiv">
                    <DataContent title={findLogement.title} location={findLogement.location} tag={tagContent} />
                </div>

                <div className="ratingHostDiv" >
                    <DataHost hostName={findLogement.host.name} hostPic={findLogement.host.picture} />
                    <DisplayRating rating={findLogement.rating} />
                </div>

            </div>

            <div className="collapseDiv">
                <Collapse title="Description" texte={findLogement.description} />
                <Collapse title="Equipement" texte={equipementContent} />
            </div>



        </React.Fragment >
    )
}
export default FicheLogement;

// trouver solution au colapse;