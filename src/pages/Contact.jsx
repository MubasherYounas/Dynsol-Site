import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
import ContactUs2 from "../Components/Contactus/Contactus";
import Hero from "../Components/Contactus/Hero";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <ContactUs2 />
      <Footer />
    </div>
  );
}

export default Contact;
