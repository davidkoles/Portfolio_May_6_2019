import React from "react";

export default function Footer() {
  return (
    <div>
      {/*<!-- Footer -->*/}
      <footer
        className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge"
        style={{ margin: "-24px" }}
      >
        <i className="fa fa-facebook-official w3-hover-opacity" />
        <i className="fa fa-instagram w3-hover-opacity" />
        <i className="fa fa-snapchat w3-hover-opacity" />
        <i className="fa fa-pinterest-p w3-hover-opacity" />
        <i className="fa fa-twitter w3-hover-opacity" />
        <i className="fa fa-linkedin w3-hover-opacity" />
        <p className="w3-medium">
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            className="w3-hover-text-green"
          >
            w3.css
          </a>
        </p>
        {/*<!-- End footer -->*/}
      </footer>
    </div>
  );
}
