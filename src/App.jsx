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
import Navbar from "./components/containers/Navbar";

function App() {
  return (
    <section className="wrapper">
      <Navbar />
      <HeroSections />
      <ProjectOverview />
      <WhyInvest />
      <TechCity />
      <KeyFeatures />
      <KeyTakeaways />
      <Vision />
      <Team />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
