import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Data from "../../data/data.json"


const CardStyle = styled.div`
    border : 1px solid #F6F6F6;
    border-radius: 25px;
    background-color: #F6F6F6;
    height : 829px;
    width : 90%;
    margin: 2% 5%;
    
`



console.log(Data);

// function Apart() {
//     return (
//         <React.Fragment>
//             {Data.map((element, index)  => ({ element }))}
//         </React.Fragment>
//     )
// }

const Apart = Data.map((element) => {
    //console.log(element);
    return {
        id: element.id,
        title: element.title,
        cover: element.cover
    }

})

console.log(Apart);


const Card = ({ id, title, cover, altText }) => {
    return (
        <div>
            <CardStyle>
                <Link to="/">
                    {/* <img src={`${cover}`} alt={altText} />
                    <h2>{`${title}`}</h2> */}
                    <div>

                    </div>
                </Link>
            </CardStyle>

        </div >
    )
};

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    altText: PropTypes.string
}

export default Card

