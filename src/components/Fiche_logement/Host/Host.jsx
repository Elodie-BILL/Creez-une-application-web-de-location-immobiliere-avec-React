import React from "react";
import "./host.css"

const DataHost = ({ hostName, hostPic }) => {

    return (<div className="data_host">
        <p>{hostName}</p>
        <img src={hostPic} alt="" />
    </div>)
}

export default DataHost;