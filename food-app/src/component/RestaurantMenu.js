import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&submitAction=ENTER`);
        const json = await data.json();
        setRestInfo(json.data);
    }

    if (restInfo === null) {
        return <Shimmer/>
    }

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(',')} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((ic, idx)=>(
                    <li key={idx}>{ic.card.info.name} - {"Rs."}{ic.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;