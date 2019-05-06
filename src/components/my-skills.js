import React from "react";

export default class Skills extends React.Component {
  render() {
    const { my_skills_section_header } = this.props;
    const { skill1 } = this.props;
    const { skill2 } = this.props;
    const { skill3 } = this.props;
    const { skill1_percentage } = this.props;
    const { skill2_percentage } = this.props;
    const { skill3_percentage } = this.props;
    const { download_resume } = this.props;
    const { table_first_item_name } = this.props;
    const { table_second_item_name } = this.props;
    const { table_third_item_name } = this.props;
    const { table_fourth_item_name } = this.props;
    const { table_first_item_number } = this.props;
    const { table_second_item_name_number } = this.props;
    const { table_third_item_name_number } = this.props;
    const { table_fourth_item_name_number } = this.props;
    return (
      <div>
        <h3 className="w3-padding-16 w3-content w3-text-grey">
          {my_skills_section_header}
        </h3>
        <p className="w3-wide">{skill1}</p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-center w3-padding-small w3-dark-grey"
            style={{ width: "99%" }}
          >
            {skill1_percentage}
          </div>
        </div>
        <p className="w3-wide">{skill2}</p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-center w3-padding-small w3-dark-grey"
            style={{ width: "95%" }}
          >
            {skill2_percentage}
          </div>
        </div>
        <p className="w3-wide">{skill3}</p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-center w3-padding-small w3-dark-grey"
            style={{ width: "90%" }}
          >
            {skill3_percentage}
          </div>
        </div>
        <br />

        <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">{table_first_item_number} </span>
            <br />
            {table_first_item_name}
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">{table_second_item_name_number} </span>
            <br />
            {table_second_item_name}
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">{table_third_item_name_number} </span>
            <br />
            {table_third_item_name}
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">{table_fourth_item_name_number} </span>
            <br />
            {table_fourth_item_name}
          </div>
        </div>

        <button className="w3-button w3-light-grey w3-padding-large w3-section">
          <i className="fa fa-download" /> {download_resume}
        </button>
      </div>
    );
  }
}
