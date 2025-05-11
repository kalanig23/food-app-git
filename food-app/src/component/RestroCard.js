import React from "react";
import {CDN_URL} from "../utils/constant";

const styleCard = {
    backgroundColor: "#F0F0F0",
}

const RestroCard = ({ resLogo, costForTwo, resName, cuisine, star, deliverTime }) => {
    return (
        <div className="rest-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL+resLogo}/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{star}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliverTime}</h4>
        </div>
    )
}

export default RestroCard;