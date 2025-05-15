import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setRestInfo(json.data);
    }

    const {name, cuisines, costForTwoMessage, cloudinaryImageId} = restInfo?.cards[2]?.card?.card?.info;

    return restInfo === null ?
    (
        <Shimmer/>

    )
    :
    (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(',')} - {costForTwoMessage}</p>
            
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;