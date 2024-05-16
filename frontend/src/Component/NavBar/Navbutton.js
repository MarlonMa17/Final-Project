import React from "react";
import "./Navbutton.css";

export default function Navbutton(props) {
    return (
        <button className="navbar-btn" onClick={props.onClick}>
            {props.name}
        </button>
    );
}
