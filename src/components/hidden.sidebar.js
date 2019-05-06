import React from "react";

import "./hidden.sidebar.css";

// isNavVisible

class NavItemLink extends React.Component {
  render() {
    return (
      <a
        className={this.props.classNameProps}
        onClick={this.props.toggleNavVisibility}
      >
        {this.props.Title}
        {this.props.removeIcon && <i className="fa fa-remove" />}
      </a>
    );
  }
}

export default class HiddenSidebar extends React.Component {
  state = {
    data: [
      {
        Title: "",
        classNameProps:
          "w3-button w3-black w3-xxxlarge w3-display - topright hidden-sidebar - link",
        removeIcon: true
      },
      {
        Title: "Home",
        classNameProps: "w3-bar-item w3-button w3-text-grey w3-hover-black"
      },
      {
        Title: "Portfolio",
        classNameProps: "w3-bar-item w3-button w3-text-grey w3-hover-black"
      },
      {
        Title: "About me",
        classNameProps: "w3-bar-item w3-button w3-text-grey w3-hover-black"
      },
      {
        Title: "My skills",
        classNameProps: "w3-bar-item w3-button w3-text-grey w3-hover-black"
      },
      {
        Title: "References",
        classNameProps: "w3-bar-item w3-button w3-text-grey w3-hover-black"
      },
      {
        Title: "Contact details",
        classNameProps: "w3-bar-item w3-button w3-text-grey w3-hover-black"
      }
    ]
  };
  render() {
    const { isNavVisible, toggleNavVisibility } = this.props;
    return (
      <div>
        {isNavVisible && (
          <nav
            className="w3-sidebar w3-sidebar-width w3-black w3-animate-right w3-xxlarge"
            id="mySidebar"
          >
            <div className="w3-bar-block w3-center">
              {this.state.data &&
                this.state.data.map((item, index) => {
                  return (
                    <NavItemLink
                      toggleNavVisibility={toggleNavVisibility}
                      removeIcon={item.removeIcon}
                      key={index}
                      Title={item.Title}
                      classNameProps={item.classNameProps}
                    />
                  );
                })}
            </div>
          </nav>
        )}
      </div>
    );
  }
}
