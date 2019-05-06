import React from "react";

export default class Header extends React.Component {
  render() {
    const { name } = this.props;
    const { role } = this.props;
    const { download_resume } = this.props;
    return (
      <div>
        <header className="w3-container w3-center" id="home">
          <h1 className="w3-jumbo">
            <b>{name}</b>
          </h1>
          <p>{role}</p>
          <img
            src="https://www.w3schools.com/w3images/profile_girl.jpg"
            className="w3-image w3-hide-large w3-hide-small w3-round"
          />
          <img
            src="https://www.w3schools.com/w3images/profile_girl.jpg"
            className="w3-image w3-hide-large w3-hide-medium w3-round"
            width="1000"
            height="1333"
          />
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <i className="fa fa-download" /> {download_resume}
          </button>
        </header>
      </div>
    );
  }
}
