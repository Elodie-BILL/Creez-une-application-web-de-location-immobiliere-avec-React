import React from "react";
import Carrousel from "../../components/Fiche_logement/Caroussel";
import { useParams } from "react-router-dom";
import data from "../../data/data.json"


function FicheLogement() {

    const { id } = useParams();

    const findLogement = data.find((logement) => {
        return logement.id === id;
    })
    console.log(findLogement);


    return (
        <React.Fragment>

            <Carrousel />


        </React.Fragment>
    )
}
export default FicheLogement;