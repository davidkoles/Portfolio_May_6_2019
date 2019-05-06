import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Skills from "./components/my-skills";
import References from "./components/references";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import SidebarWithImage from "./components/sidebar.with.image";
import MenuIcon from "./components/menu.icon";
import PageContent from "./components/page.content";
import HiddenSidebar from "./components/hidden.sidebar";
import { BrowserRouter, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./styles.css";

class App extends React.Component {
  state = {
    isNavVisible: false
  };

  toggleNavVisibility = () => {
    this.setState({
      isNavVisible: !this.state.isNavVisible
    });
  };
  render() {
    return (
      <div>
        <SidebarWithImage />
        <MenuIcon toggleNavVisibility={this.toggleNavVisibility} />
        <HiddenSidebar
          toggleNavVisibility={this.toggleNavVisibility}
          isNavVisible={this.state.isNavVisible}
        />
        <div className="marginLeft">
          <PageContent />
          <Header
            name="Jane Doe"
            role="UI & UX Developer"
            download_resume="Download Resume"
          />
          <Portfolio portfolio_section_header="My Portfolio" />
          <About
            about_section_header="About"
            text="Some text about me. Some text about me."
          />
          <Skills
            my_skills_section_header="My skills"
            skill1="JavaScript ES6"
            skill2="React"
            skill3="Redux"
            skill1_percentage="99%"
            skill2_percentage="95%"
            skill3_percentage="90%"
            download_resume="Download Resume"
            table_first_item_name="Partners"
            table_second_item_name="Projects Done"
            table_third_item_name="Happy Clients"
            table_fourth_item_name="Meetings"
            table_first_item_number="15+"
            table_second_item_name_number="55+"
            table_third_item_name_number="89+"
            table_fourth_item_name_number="150+"
          />
          <References refrences_section_header="References" />
          <Contacts
            address="Address: Bratislava, Slovakia"
            phone="Phone: 0918 123 456"
            email="Email: jane.doe@gmail.com"
            contact_me_section_header="Contact details"
            form_header="Lets get in touch. Send me a message:"
            placeholder1="Name"
            placeholder2="Email"
            placeholder3="Subject"
            placeholder4="Message"
            submit_button="Send message"
          />
          <Footer />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// portfolio  cez state & map - 2 polia => obrazky nalavo a napravo
// menu icon co spravit s tymi props v classe? je to totiz funkcia teraz

// react router som nestihol
// hidden side sa zobrazuje napravo  - opravene
