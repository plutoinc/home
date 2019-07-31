import React from "react";
// components
import Header from "../components/header";
import Footer from "../components/newfooter";
import ScinapseForInstitutionSection from "./components/scinapseForInstitutionSection";
import ProblemSection from "./components/problemSection";
import HowToPlutoSolveSection from "./components/howToPlutoSolveSection";

const SolutionContainer = () => {
  return (
    <section>
      <Header isTop />
      <ScinapseForInstitutionSection />
      <ProblemSection />
      <HowToPlutoSolveSection />
      <Footer />
    </section>
  );
};

export default SolutionContainer;
