import React from "react";

// components
import Header from "../components/header";
import Footer from "../components/newfooter";
import MainSection from "./components/mainSection";
import TechSection from "./components/techSection";
import FunctionSection from "./components/functionSection";
import RewardSection from "./components/rewardSection";
import POCSection from "./components/pocSection";
import MailingSection from "./components/mailingSection";

class NewHomeContainer extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return (
      <section>
        <Header />
        <MainSection />
        <TechSection />
        <FunctionSection />
        <RewardSection />
        <POCSection />
        <MailingSection />
        <Footer />
      </section>
    );
  }
}

export default NewHomeContainer;
