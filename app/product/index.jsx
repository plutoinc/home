import React from "react";
// components
import Header from "../components/header";
import Footer from "../components/newfooter";
import KeyInfoSection from "./component/keyInfoSection";
import ChartInfoSection from "./component/chartInfoSection";
import ScinapseFeatureInfoSection from "./component/scinapseFeatureInfoSection";
import DesignedForResearcherSection from "./component/designedForResearcherSection";

const ProductContainer = () => {
  return (
    <section>
      <Header isTop />
      <KeyInfoSection />
      <ChartInfoSection />
      <ScinapseFeatureInfoSection />
      <DesignedForResearcherSection />
      <Footer />
    </section>
  );
};

export default ProductContainer;
