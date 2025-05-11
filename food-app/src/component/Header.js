import React,{useState, useEffect} from "react";
import {LOGO_URL} from "../utils/constant";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    //if no dependancy array => useEffect is called on every render
    //if empty dependancy aarray= []=> useEffect is called on onlny initial render just once,
    //if not empty dependancy array=[btnName]=> useEffect is called every time the state is updated.
    
    useEffect(()=>{
        console.log("useeffect called");
    },[]);

    const handleChangeName= () => {
        if (btnName==="Login") {
            setBtnName("Logout");
        } else {
            setBtnName("Login");
        }
    }

    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={handleChangeName}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;