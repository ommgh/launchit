import CTA from "./cta";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Pricing from "./pricing";
import Projects from "./projects";
import Reviews from "./reviews";
import Services from "./services";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Pricing />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}

export default LandingPage;
