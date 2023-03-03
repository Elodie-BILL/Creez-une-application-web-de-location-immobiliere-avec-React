import React from "react";
import Carrousel from "../../components/Fiche_logement/Carrousel/Caroussel";
import DataContent from "../../components/Fiche_logement/DataContent/DataContent"
import { useParams } from "react-router-dom";
import data from "../../data/data.json"
import Collapse from "../../components/Collapse";
import DisplayRating from "../../components/Fiche_logement/Rating/Rating";



function FicheLogement() {

    const { id } = useParams();

    const findLogement = data.find((logement) => {
        return logement.id === id;
    })

    const tagContent = findLogement.tags.map((tag) => <p> {tag}</p>);
    const equipementContent = findLogement.equipments.map((equipment) => (<p>{equipment}</p>))



    return (
        <React.Fragment>

            <Carrousel srcImg={findLogement.pictures} />
            <DataContent title={findLogement.title} location={findLogement.location} tag={tagContent} />
            <DisplayRating rating={findLogement.rating} />
            <Collapse title="Description" texte={findLogement.description} />
            <Collapse title="Equipement" texte={equipementContent} />



        </React.Fragment >
    )
}
export default FicheLogement;