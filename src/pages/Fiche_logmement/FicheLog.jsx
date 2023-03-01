import React from "react";
import Caroussel from "../../components/Fiche_logement/Caroussel";
import { useParams } from "react-router-dom";
import data from "../../data/data.json"


function FicheLogement() {

    const { id } = useParams();

    const findLogement = data.find((logement) => {
        return logement.id === id;

    })

    console.log(findLogement.pictures)

    const pics = findLogement.pictures;
    return (
        <React.Fragment>

            <Caroussel srcImg={pics} />


        </React.Fragment>
    )
}

export default FicheLogement;