import React,{ useEffect, useState } from "react";

const User = ({name, contact, location}) => {
    const [count ,setCount] = useState(0);
    
    useEffect(()=>{
    //api called

    },[])

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location {location}</h3>
            <h4>Contact: {contact}</h4>
        </div>
    )
}

export default User;