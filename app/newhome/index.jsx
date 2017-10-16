import React from "react";

// components
import Header from "../components/header";
import Footer from "../components/newfooter";
import MainSection from "./components/mainSection";
import VideoSection from "./components/videoSection";
import ProblemSection from "./components/problemSection";
import AchieveSection from "./components/achieveSection";
import WorkSection from "./components/workSection";
import DetailSection from "./components/detailSection";
import MailingSection from "./components/mailingSection";

class NewHomeContainer extends React.PureComponent {
  render() {
    const { intl } = this.props;
    return (
      <section>
        <Header />
        <MainSection />
        <ProblemSection />
        <AchieveSection />
        <WorkSection />
        <DetailSection />
        <MailingSection />
        <Footer />
      </section>
    );
  }
}

export default NewHomeContainer;
