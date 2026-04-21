import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
import Hero from "../Components/Home/Hero";
import WhatWeDo from "../Components/Home/WhatWeDo";
import OurProcess from "../Components/Home/OurProcess";
import WhyDynSol from "../Components/Home/WhyDynSol";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      <Hero/>
      <WhatWeDo/>
      <OurProcess/>
      <WhyDynSol/>
      

      {/* Page content
      <main className="grow">
        <h1 className="text-center mt-6 font-bold text-3xl">
          This is Home page
        </h1>
      </main> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
