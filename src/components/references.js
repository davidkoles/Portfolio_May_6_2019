import React from "react";

export default class References extends React.Component {
  state = {
    reviews: [
      {
        id: 1,
        src: "https://www.w3schools.com/w3images/avatar_smoke.jpg",
        name: "Chandler Bing.",
        position: "Web Designer.",
        review_content: "Jane is just awesome. I am so happy to have met her!"
      },
      {
        id: 2,
        src: "https://www.w3schools.com/w3images/bandmember.jpg",
        name: "Chris Fox",
        position: "CEO at Mighty School",
        review_content: "Jane Doe saved us from a web disaster."
      },
      {
        id: 3,
        src: "https://www.w3schools.com/w3images/avatar_g2.jpg",
        name: "Rebecca Flex",
        position: "CEO at Facebook",
        review_content: "No one is better than Jane Doe."
      }
    ]
  };
  render() {
    const { reviews } = this.state;
    const { refrences_section_header } = this.props;
    return (
      <div>
        <h3 className="w3-padding-24 w3-content w3-text-grey">
          {refrences_section_header}
        </h3>
        <div>
          {reviews.map((item, index) => (
            <p key={index}>
              <img
                src={item.src}
                alt="Avatar"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: "80px" }}
              />
              <p>
                <span className="w3-large w3-text-black w3-margin-right">
                  {item.name}
                </span>{" "}
                {item.position}
              </p>
              <p>{item.review_content}</p>
              <br />
            </p>
          ))}
        </div>
      </div>
    );
  }
}

{
  /*
        <img
          src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
          alt="Avatar"
          className="w3-left w3-circle w3-margin-right"
          style={{ width: "80px" }}
        />
        <p>
          <span className="w3-large w3-text-black w3-margin-right">
            Chandler Bing.
          </span>{" "}
          Web Designer.
        </p>
        <p>Jane Doe is just awesome. I am so happy to have met her!</p>
        <br />

 */
}
