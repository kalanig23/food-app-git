import React,{useState, useEffect} from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    //if no dependancy array => useEffect is called on every render
    //if empty dependancy aarray= []=> useEffect is called on onlny initial render just once,
    //if not empty dependancy array=[btnName]=> useEffect is called every time the state is updated.
    
    useEffect(()=>{
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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login" onClick={handleChangeName}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;