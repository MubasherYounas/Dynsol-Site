import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <h1 className="text-center mt-6 font-bold text-3xl">
          This is A
        </h1>
      </main>
      <Footer />
    </div>
  );
}

export default About;
