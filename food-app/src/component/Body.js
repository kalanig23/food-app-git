import React, {useEffect, useState} from "react";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(()=> {
        fetchData();
    },[]);

    const handleOnClick = () => {
        const filterListOfRestaurants = listOfRestaurants.filter((lr=>lr?.info?.avgRatingString>"4.0"));
        setListOfRestaurants(filterListOfRestaurants);
    }
    
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const handleSearch = () => {
        const searchFilteredListOfRestaurants = listOfRestaurants.filter(lr=>lr?.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurants(searchFilteredListOfRestaurants);
    }

    const handleOnChangeSearch = (event) => {
        const searchItem = event.target.value;
        setSearchText(searchItem);
    }
console.log(listOfRestaurants);
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                    value={searchText}
                    className="search-box"
                    onChange={handleOnChangeSearch}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={handleOnClick}>
                    Top Rated Restaurant
                </button>
            </div>
            {listOfRestaurants.length === 0 ?
            <Shimmer/>
            :
            <div className="resto-container">
                {filteredRestaurants.map((rl,idx)=> (
                    <RestroCard
                        key={rl?.info?.id}
                        resLogo={rl?.info?.cloudinaryImageId}
                        resName={rl?.info?.name}
                        costForTwo={rl?.info?.costForTwo}
                        cuisine={rl?.info?.cuisines.join(',')}
                        star={rl?.info?.avgRatingString}
                        deliverTime={rl?.info?.sla?.slaString}
                    />
                ))}
            </div>}
        </div>
    );
}

export default Body;