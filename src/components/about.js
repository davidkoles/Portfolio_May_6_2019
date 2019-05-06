import React from "react";

export default class About extends React.Component {
  render() {
    const { text } = this.props;
    const { about_section_header } = this.props;
    return (
      <div>
        <div
          className="w3-content w3-justify w3-text-grey w3-padding-32"
          id="about"
        >
          <h2>{about_section_header}</h2>
          <p className="w3-opacity" />
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
