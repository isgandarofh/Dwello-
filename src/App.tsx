import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import FirstSection from "./Components/FirstSection/FirstSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import ResidenceCardSection from "./Components/ResidencesCardSection/ResidenceCardSection";
import AgentSection from "./Components/AgentsSection/AgentSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <AboutSection />
      <ServicesSection />
      <ResidenceCardSection/>
      <AgentSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}
