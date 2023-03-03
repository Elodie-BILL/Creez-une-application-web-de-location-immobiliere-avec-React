import React from "react";
import PropTypes from "prop-types"
import "./style.css"
import { useState } from "react";
import Vector from "../../assets/Vector.svg"


const Collapse = ({ title, texte }) => {

    const [open, updateOpen] = useState(false);

    return (
        <React.Fragment>
            {/* Test: {open ? 'vrai' : 'faux'} */}
            <div className="divTitle" onClick={() => { updateOpen(!open) }} >

                <p className="Apropos_Title">
                    {title}
                </p>

                <img className="imgVect" src={Vector} alt="Image vectorielle d'une flèche " />
            </div>

            {open && <div className="divTexte" >
                <p className="Apropos_Texte">
                    {texte}
                </p>

            </div>}

        </React.Fragment>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    texte: PropTypes.string.isRequired,
}


export default Collapse