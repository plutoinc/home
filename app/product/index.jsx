import React from "react";
// components
import Header from "../components/header";
import Footer from "../components/newfooter";
import KeyInfoSection from "./component/keyInfoSection";
import ChartInfoSection from "./component/chartInfoSection";
import ScinapseFeatureInfoSection from "./component/scinapseFeatureInfoSection";
import DesignedForResearcherSection from "./component/designedForResearcherSection";
import RepresentSection from "../home/components/representSection";
import MobileDesignedForResearcherSection from "./component/mobileDesignedForResearcherSection";

const ProductContainer = () => {
  return (
    <section>
      <Header isTop />
      <KeyInfoSection />
      <ChartInfoSection />
      <ScinapseFeatureInfoSection />
      <DesignedForResearcherSection />
      <MobileDesignedForResearcherSection />
      <RepresentSection />
      <Footer />
    </section>
  );
};

export default ProductContainer;
