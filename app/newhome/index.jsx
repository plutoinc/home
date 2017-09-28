import React from "react";

// components
import Navbar from "../components/newnavbar";
import Footer from "../components/newfooter";
import MainSection from "./components/mainSection";

class NewHomeContainer extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return (
      <div>
        <MainSection />
        <Footer />
      </div>
    );
  }
}

export default NewHomeContainer;
