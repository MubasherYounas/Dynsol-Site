import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
// import Hero from "../Components/Contactus/Hero";
import OurBlog from "../Components/blogs/OurBlog";

function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <Hero /> */}
      <OurBlog />
      <Footer />
    </div>
  );
}

export default Blog;
