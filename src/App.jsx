import Contact from "./components/containers/Contact";
import Footer from "./components/containers/Footer";
import HeroSections from "./components/containers/HeroSections";
import KeyFeatures from "./components/containers/KeyFeatures";
import KeyTakeaways from "./components/containers/KeyTakeaways";
import ProjectOverview from "./components/containers/ProjectOverview";
import Team from "./components/containers/Team";
import TechCity from "./components/containers/TechCity";
import Vision from "./components/containers/Vision";
import WhyInvest from "./components/containers/WhyInvest";

function App() {
  return (
    <section className="wrapper">
      <HeroSections />
      <ProjectOverview />
      <TechCity />
      <KeyFeatures />
      <KeyTakeaways />
      <Vision />
      <WhyInvest />
      <Team />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
