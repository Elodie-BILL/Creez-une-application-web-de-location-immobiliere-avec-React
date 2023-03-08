import React from "react";
import PropTypes from "prop-types"
import "./Collapse.css"
import { useState } from "react";
import Vector from "../../assets/Vector.svg"


const Collapse = ({ title, texte }) => {

    const [open, updateOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="divTitle" onClick={() => { updateOpen(!open) }} >


                <p className="Collapse_Title">
                    {title}
                </p>

                {open ? <img
                    className="imgVectReverse"
                    src={Vector}
                    alt="Flèche d'ouverture "
                /> : <img
                    className="imgVect"
                    src={Vector}
                    alt="Flèche de fermeture "
                />}

            </div>

            {open && <div className="divTexte">
                <p className="Collapse_Texte">
                    {texte}
                </p>

            </div>}

        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    texte: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array]).isRequired,
}


export default Collapse;

//faire animation des vecteurs