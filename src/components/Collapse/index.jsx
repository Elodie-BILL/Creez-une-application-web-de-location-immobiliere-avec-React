import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types"
import "./style.css"
import { useState } from "react";
import Vector from "../../assets/Vector.png"


const DivTitle = styled.button`
    height : 47px;
    width : 70%;
    margin: 1% 15% 0 15%;
    border : 1px solid #FF6060;
    border-radius : 5px;
    background-color: #FF6060;
    display : flex;
    align-items : center;
    justify-content : space-between;
   

`

const DivTexte = styled.div`
    height : 137px;
    width : 70%;
    margin : 0 15% 1% 15%;
    border : 1px solide #F6F6F6;
    background-color : #F6F6F6;

`
const ImgVect = styled.img`
    height : 14px;
    width : 23px;
`



const Collapse = ({ title, texte }) => {

    const [open, updateOpen] = useState(false);

    return (
        <React.Fragment>
            {/* Test: {open ? 'vrai' : 'faux'} */}
            <DivTitle onClick={() => { updateOpen(!open) }} >

                <p className="Apropos_Title">
                    {title}
                </p>

                <ImgVect src={Vector} alt="Image vectorielle d'une flèche " />
            </DivTitle>

            {open && <DivTexte>
                <p className="Apropos_Texte">
                    {texte}
                </p>

            </DivTexte>}

        </React.Fragment>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    texte: PropTypes.string.isRequired,
}


export default Collapse