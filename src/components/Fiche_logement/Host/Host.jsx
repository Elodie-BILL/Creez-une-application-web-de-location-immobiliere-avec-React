import React from "react";
import PropTypes from "prop-types"
import "./Host.css"

const DataHost = ({ hostName, hostPic }) => {

    return (<div className="data_host">
        <p>{hostName}</p>
        <img src={hostPic} alt="" />
    </div>)
}

DataHost.prototype = {
    hostName: PropTypes.string.isRequired,
    hostPic: PropTypes.string.isRequired
}

export default DataHost;