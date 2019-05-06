import React from "react";
import "./portfolio.css";

{
  /* export default class Portfolio extends React.Component {
  render() {
    const { portfolio_section_header } = this.props;
    return (
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h2 className="w3-text-grey">{portfolio_section_header}</h2>
        <p className="w3-opacity" />

        <div className="w3-row-padding">
          <div className="w3-half">
            <img src="https://www.w3schools.com/w3images/wedding.jpg" />
            <img src="https://www.w3schools.com/w3images/rocks.jpg" />
            <img src="https://www.w3schools.com/w3images/sailboat.jpg" />
          </div>

          <div className="w3-half">
            <img src="https://www.w3schools.com/w3images/underwater.jpg" />
            <img src="https://www.w3schools.com/w3images/chef.jpg" />
            <img src="https://www.w3schools.com/w3images/wedding.jpg" />
            <img src="https://www.w3schools.com/w3images/p6.jpg" />
          </div>
        </div>
      </div>
    );
  }
} */
}

export default class Portfolio extends React.Component {
  state = {
    images_left: [
      {
        id: 1,
        src: "https://www.w3schools.com/w3images/wedding.jpg",
        name: ""
      },
      {
        id: 2,
        src: "https://www.w3schools.com/w3images/rocks.jpg",
        name: ""
      },
      {
        id: 3,
        src: "https://www.w3schools.com/w3images/sailboat.jpg",
        name: ""
      }
    ],
    images_right: [
      {
        id: 4,
        src: "https://www.w3schools.com/w3images/underwater.jpg",
        name: ""
      },
      {
        id: 5,
        src: "https://www.w3schools.com/w3images/chef.jpg",
        name: ""
      },
      {
        id: 6,
        src: "https://www.w3schools.com/w3images/wedding.jpg",
        name: ""
      },
      {
        id: 7,
        src: "https://www.w3schools.com/w3images/p6.jpg",
        name: ""
      }
    ]
  };
  render() {
    const { portfolio_section_header } = this.props;
    const { images_left } = this.state;
    const { images_right } = this.state;
    return (
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h2 className="w3-text-grey">{portfolio_section_header}</h2>
        <p className="w3-opacity" />

        <div className="w3-row-padding">
          <div className="w3-half ">
            {images_left.map((item, index) => (
              <img src={item.src} alt="" />
            ))}
          </div>

          <div className="w3-half ">
            {images_right.map((item, index) => (
              <img src={item.src} alt="" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
