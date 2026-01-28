import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/hero/HeroSection"
import Hero_t from "./components/hero/Hero_t";
import Footer from "./components/footer/Footer";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import AIFusionSection from "./components/AIFusionSection/AIFusionSection";
import DogeRollingGrid from "./components/DogeRollingGrid/DogeRollingGrid";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import CommunityCTA from "./components/CommunityCTA/CommunityCTA";


function App() {
  return (
    <div >
      <Navbar/>
       <HeroSection/>
    
      <Hero_t />
     
      <Tokenomics/>
      <AIFusionSection />
      <DogeRollingGrid />
       <PartnersSection />
       <CommunityCTA />
        

      <Footer/>
    </div>
  );
}

export default App;
