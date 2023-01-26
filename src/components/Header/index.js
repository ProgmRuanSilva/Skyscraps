import React from "react";
import './header.css'
import '../../assets/building.png'

export default function Header() {
    return(
        <div id="header">
            <hr id="headerLine"/>
            <h1 id="headerTitle"> Tallest Skycrapers of the Word</h1>
            <img src={require('../../assets/building.png')} alt="logo"></img>
        </div>
    )
}