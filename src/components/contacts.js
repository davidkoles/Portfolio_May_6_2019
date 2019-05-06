import React from "react";
import "./contacts.css";

export default class Contacts extends React.Component {
  render() {
    const { address } = this.props;
    const { phone } = this.props;
    const { email } = this.props;
    const { contact_me_section_header } = this.props;
    const { form_header } = this.props;
    const { placeholder1 } = this.props;
    const { placeholder2 } = this.props;
    const { placeholder3 } = this.props;
    const { placeholder4 } = this.props;
    const { submit_button } = this.props;

    return (
      <div>
        {/*<!-- Contact Section -->*/}
        <div className="w3-padding-32 w3-content w3-text-grey" id="contact">
          <h2>{contact_me_section_header}</h2>
          <p className="w3-opacity" />

          <div className="w3-section">
            <p>
              <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right" />{" "}
              {address}
            </p>
            <p>
              <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right" />{" "}
              {phone}
            </p>
            <p>
              <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right">
                {" "}
              </i>{" "}
              {email}
            </p>
          </div>

          {/*<!-- Image of location/map -->*/}
          <img
            src="https://www.w3schools.com/w3images/map.jpg"
            className="w3-image w3-greyscale"
          />

          <p>{form_header}</p>
          <form action="/action_page.php" target="_blank">
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder={placeholder1}
                required
                name="Name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder={placeholder2}
                required
                name="Email"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder={placeholder3}
                required
                name="Subject"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder={placeholder4}
                required
                name="Message"
              />
            </p>
            <p>
              <button
                className="w3-button w3-light-grey w3-padding-large"
                type="submit"
              >
                <i className="fa fa-paper-plane" /> {submit_button}
              </button>
            </p>
          </form>
          {/*<!-- End Contact Section -->*/}
        </div>
      </div>
    );
  }
}
