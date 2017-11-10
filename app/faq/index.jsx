import React from "react";
// components
import Header from "../components/header";
import TopSection from "./components/topSection";
import AnswerSection from "./components/answerSection";
import BottomSection from "./components/bottomSection";
import Footer from "../components/newfooter";

const FAQContainer = () => {
  return (
    <section>
      <Header isTop />
      <TopSection />
      <AnswerSection />
      <BottomSection />
      <Footer />
    </section>
  );
};

export default FAQContainer;
