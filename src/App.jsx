import Footer from "./components/containers/Footer";
import HeroSections from "./components/containers/HeroSections";
import KeyFeatures from "./components/containers/KeyFeatures";
import ProjectOverview from "./components/containers/ProjectOverview";
import Team from "./components/containers/Team";
import Vision from "./components/containers/Vision";
import WhyInvest from "./components/containers/WhyInvest";
import Navbar from "./components/containers/Navbar";
import KeyTakeaways from "./components/containers/KeyTakeaways";

function App() {
  return (
    <section className="wrapper">
      <Navbar />
      <HeroSections />
      <Vision />
      <ProjectOverview />
      <KeyFeatures />
      {/* <InvestmentOpportunities /> */}
      <KeyTakeaways />
      <WhyInvest />
      <Team />
      {/* <Contact /> */}
      <Footer />
    </section>
  );
}

export default App;
