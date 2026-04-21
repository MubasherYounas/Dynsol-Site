import React, { useEffect, Suspense } from "react";
import Hero from "../Components/Services/Hero";
import OurServices from "../Components/Services/OurServices";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";

export default function Services() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}

function ServicesContent() {
  // ✅ Get query params from the browser URL
  const searchParams = new URLSearchParams(window.location.search);
  const selectedTab = searchParams.get("tab");

  useEffect(() => {
    if (selectedTab) {
      const el = document.getElementById(selectedTab);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedTab]);

  return (
    <>
      <Header />
      <Hero />
      <OurServices selectedTab={selectedTab} />
      <Footer />
    </>
  );
}
