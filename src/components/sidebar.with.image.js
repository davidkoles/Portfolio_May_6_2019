import React from "react";
import "./sidebar.with.image.css";

export default function SidebarWithImage() {
  return (
    <div>
      {/*<!-- Sidebar with image -->*/}
      <nav className="w3-sidebar w3-hide-medium w3-hide-small sidebar-with-image">
        <div className="bgimg" />
      </nav>
    </div>
  );
}
