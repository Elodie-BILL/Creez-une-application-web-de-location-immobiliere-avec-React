import React, { useState } from "react";
import PropTypes from "prop-types";
import left from "../../assets/VectorRight.png";
import right from "../../assets/VectorLeft.png";
import data from "../../data/data.json";
import { useParams } from "react-router-dom";
import "../Fiche_logement/Carrousel.css";


const Carrousel = ({ srcImg }) => {


    //Je veux récupérer les photos  du tableau data liées à l'id en url

    //Je récupère l'id et m'assure qu'elle soit idéentique à l'id dans la barre url

    const urlId = useParams();
    console.log(urlId);
    const logementSelection = data.filter(logement => logement.id === urlId)

    const [current, setcurrent] = useState(0);

    function next() {
        setcurrent ? 
    };




    return (

        <div className="carrousel_div">

            <img
                onClick={() => { setcurrent(!current) }}
                className="swip_btn"
                id="right_btn" src={right}
                alt="flèche vers la droite"
            />

            < div className="imgDiv">
                {<img src="" alt="Photographies du logement" />
                }
            </div>

            <img
                onClick={() => { move(!fixed) }}
                className="swip_btn" id="left_btn"
                src={left} alt="flèche vers la gauche"
            />

        </div>
    )
}

Carrousel.propTypes = {
    srcImg: PropTypes.array,
}
export default Carrousel