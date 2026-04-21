import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import ThankYouPage from "../pages/Thanksyou";
import ProjectDetails from "../Components/projectdetails/project/page";
import Hireus from "../pages/Hireus";
import OurBlog from "../Components/blogs/OurBlog";
import BlogDetails from "../Components/blogdetails/BlogDetails";
import AdminLogin from "../Components/admin/Adminlogin";
import AdminDashboard from "../pages/AdminDashboard";
import BusinessCentralCustomization from "../pages/BusinessCentralCustomization";
import BusinessCentralImplementation from "../pages/BusinessCentralImplementation";
import BusinessCentralNAVSupport from "../pages/BusinessCentralNAVSupport";
import UpgradetoBusinessCentral from "../pages/UpgradetoBusinessCentral";
import PowerBI from "../pages/PowerBI";
import AOS from "aos";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refresh();
  }, [pathname]);

  return null;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hireus" element={<Hireus />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route
          path="/business-Central-Customization"
          element={<BusinessCentralCustomization />}
        />
        <Route
          path="/business-Central-Implementationn"
          element={<BusinessCentralImplementation />}
        />
        <Route
          path="/business-Central-NAVSupport"
          element={<BusinessCentralNAVSupport />}
        />
        <Route
          path="/upgrade-to-Business-Central"
          element={<UpgradetoBusinessCentral />}
        />
        <Route path="/power-bi" element={<PowerBI />} />

        <Route path="/projectdetails/:projectId" element={<ProjectDetails />} />
        <Route path="/blog" element={<OurBlog />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />

        <Route path="/admin" element={<AdminLogin />} />

        {/* Admin Dashboard */}
        <Route path="/admin/dashboard/" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
