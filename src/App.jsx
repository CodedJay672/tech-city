import Footer from "./components/containers/Footer";
import HeroSections from "./components/containers/HeroSections";
import KeyFeatures from "./components/containers/KeyFeatures";
import ProjectOverview from "./components/containers/ProjectOverview";
import Team from "./components/containers/Team";
import Vision from "./components/containers/Vision";
import WhyInvest from "./components/containers/WhyInvest";
import Navbar from "./components/containers/Navbar";
import KeyTakeaways from "./components/containers/KeyTakeaways";
import InvestmentOpportunities from "./components/containers/InvestmentOpportunities";
import CTA from "./components/containers/CTA";

function App() {
  return (
    <>
      <Navbar />
      <HeroSections />
      <Vision />
      <ProjectOverview />
      <KeyFeatures />
      <WhyInvest />
      <KeyTakeaways />
      <InvestmentOpportunities />
      <CTA />
      <Team />
      <Footer />
    </>
  );
}

export default App;
