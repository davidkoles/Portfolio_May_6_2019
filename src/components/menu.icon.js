import React from "react";
import "./menu.icon.css";

export default function MenuIcon(props) {
  return (
    <div style={{}}>
      {/* <!-- Menu icon to open sidebar -->*/}
      <span
        className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black menu-icon"
        onClick={props.toggleNavVisibility}
      >
        <i className="fa fa-bars" />
      </span>
    </div>
  );
}
