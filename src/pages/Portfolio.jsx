import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
import Hero from "../Components/portfolio/Hero";
import OurPortfolio from "../Components/portfolio/OurPortfolio";

function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

    
      <div className="flex-1">
        <Hero />
        <OurPortfolio />
      </div>

      <Footer />
    </div>
  );
}

export default Portfolio;
