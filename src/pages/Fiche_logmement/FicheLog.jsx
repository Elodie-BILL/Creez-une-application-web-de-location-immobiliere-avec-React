import React from "react";
import Carrousel from "../../components/Fiche_logement/Caroussel";
import DataContent from "../../components/Fiche_logement/DataContent"
import { useParams } from "react-router-dom";
import data from "../../data/data.json"


function FicheLogement() {

    const { id } = useParams();

    const findLogement = data.find((logement) => {
        return logement.id === id;
    })



    return (
        <React.Fragment>

            <Carrousel srcImg={findLogement.pictures} />
            <DataContent title={findLogement.title} location={findLogement.location} tag={[findLogement.tags]} />



        </React.Fragment>
    )
}
export default FicheLogement;