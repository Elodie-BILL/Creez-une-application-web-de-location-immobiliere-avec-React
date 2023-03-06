import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Data from "../../data/data.json"
import "../CartLogement/card.css"


console.log(Data);

const Card = ({ title, cover, altText, id }) => {
    return (
        <article className="article_card">
            <Link to={"logement/" + id}>
                <img className="cardStyle" src={`${cover}`} alt={altText} />
                <h2>{`${title}`}</h2>
            </Link>
        </article>
    )
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
};

export default Card;

