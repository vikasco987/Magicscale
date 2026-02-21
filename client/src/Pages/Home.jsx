



import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import About from "../components/About";
import Footer from "../components/Footer";
import Video from "../components/Video";
import HomeWork from "../components/HomeWork";
import Work from "../components/Work";
import Pricing from "../components/Pricing";
import LeadPopup from "../components/LeadPopup";
// import UserDashboard from '../Pages/UserDashboard/UserDashboard';



const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // smooth scroll to the section
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);
  return (
    <div>
      <Header />
      {/* <UserDashboard /> */}
      <Hero />
      <Video />
      <HomeWork />
      <Pricing />
      <LeadPopup />
      {/* <Services /> */}
      {/* <Testimonial /> */}
    
      <Contact />
      <About />
      <Footer />
    </div>
  );
};

export default Home;

