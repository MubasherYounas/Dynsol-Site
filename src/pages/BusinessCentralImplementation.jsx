import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Cloud,
  Settings,
  Wrench,
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  BarChart3,
  ShoppingCart,
  Headphones,
  FolderKanban,
  Package,
  Warehouse,
  Cog,
  FileText,
} from "lucide-react";

function BusinessCentralImplementation() {
  const benefits = [
    {
      icon: <Settings size={28} />,
      title: "Unified Business Management",
      description:
        "Streamline your finance, operations, sales & service—everything inside a single smart platform.",
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud-First Accessibility",
      description:
        "Secure cloud access from any device. Stay connected with Microsoft's trusted infrastructure.",
    },
    {
      icon: <Wrench size={28} />,
      title: "Seamless Integration",
      description:
        "Integrates smoothly with Office 365, Power BI, Teams and other Dynamics applications.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Real-Time Analytics",
      description:
        "Make timely decisions with AI-powered dashboards, KPIs & automated reporting.",
    },
  ];

  const features = [
    {
      title: "Training & Adoption",
      icon: <Users size={26} />,
      content:
        "Empowering teams with structured learning programs and continuous adoption support.",
    },
    {
      title: "Flexible Pricing",
      icon: <DollarSign size={26} />,
      content:
        "Cost-effective budget-friendly licensing options suited for all business sizes.",
    },

    {
      title: "Security & Compliance",
      icon: <Shield size={26} />,
      content:
        "Industry-grade encryption, compliance standards & multi-layered data protection.",
    },
  ];

  const businessCentralModules = [
    {
      title: "Financials",
      icon: <BarChart3 size={28} />,
      description:
        "Manage general ledger, budgeting, cash flow, fixed assets, and financial reporting with real-time visibility.",
    },
    {
      title: "Sales",
      icon: <ShoppingCart size={28} />,
      description:
        "Handle quotes, orders, invoicing, pricing, and customer management to streamline the order-to-cash process.",
    },
    {
      title: "Services",
      icon: <Headphones size={28} />,
      description:
        "Manage service orders, contracts, planning, and billing to deliver and track after-sales and support services.",
    },
    {
      title: "Projects",
      icon: <FolderKanban size={28} />,
      description:
        "Plan, track, and control projects with budgets, resource management, time tracking, and project-based billing.",
    },
    {
      title: "Supply Chain",
      icon: <Package size={28} />,
      description:
        "Optimize purchasing, inventory, and demand planning to ensure the right products are available at the right time.",
    },
    {
      title: "Warehousing",
      icon: <Warehouse size={28} />,
      description:
        "Control warehouse operations including receiving, picking, put-away, shipping, and inventory movements.",
    },
    {
      title: "Manufacturing",
      icon: <Cog size={28} />,
      description:
        "Plan and execute production with bills of materials, routings, capacity planning, and production orders.",
    },
    {
      title: "Reporting and Analytics",
      icon: <FileText size={28} />,
      description:
        "Gain insights with built-in reports, financial analysis, and Power BI dashboards for data-driven decisions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* VIDEO SECTION */}
      <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
        {/* <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/business-central-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        /> */}

        {/* OPTIONAL DARK OVERLAY */}
        {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT - TITLE */}
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Introduction to Business Central
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover how Microsoft Dynamics 365 Business Central transforms
                business operations with comprehensive ERP capabilities,
                real-time insights, and seamless integration across your entire
                organization.
              </p>
            </div>

            {/* RIGHT - VIDEO */}
            <div data-aos="fade-left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="/videos/business-central-bg.mp4"
                  title="Introduction to Business Central"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="relative w-full bg-linear-to-br from-gray-50 via-white to-gray-100 py-20 overflow-hidden">
        {/* Soft background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-400/10 blur-[160px] rounded-full"></div>

        <div className="container mx-auto px-2 md:px-6 xl:px-18 flex flex-col md:flex-row items-center gap-12">
          {/* LEFT */}
          <div className="flex-1" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <CheckCircle size={16} />
              Microsoft Certified
            </div>

            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              <span className="text-gray-800">Dynamics 365</span> Business
              Central
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Accelerate business efficiency with our expert end-to-end ERP
              implementation—built for scalability, security & enterprise
              performance.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-all shadow">
                  Start Implementation
                </button>
              </Link>

              <Link to="/services">
                <button className="px-8 py-3 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all">
                  View Services
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="flex-1 flex justify-center items-center"
            data-aos="fade-left"
          >
            <div className="relative w-full max-w-lg">
              <img
                src="/icons/2-business-central-implementation.png"
                alt="Microsoft Dynamics 365 Business Central Modules"
                className="w-full h-auto object-contain"
                loading="eager"
                style={{ imageRendering: "-webkit-optimize-contrast" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS BANNER */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-800">
                Dynamics 365 Business Central
              </span>{" "}
              is the latest evolution of Dynamics NAV, trusted by{" "}
              <span className="font-semibold text-gray-900">
                200,000+ customers
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900">
                2.7 million+ users
              </span>
              , and{" "}
              <span className="font-semibold text-gray-900">
                3,800+ partners
              </span>{" "}
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-12">
            <span className="text-gray-600 text-sm font-semibold uppercase">
              Why Choose Us
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-gray-900">
              Enterprise-Ready Implementation Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-200"
                data-aos="flip-left"
                data-aos-delay={i * 100}
              >
                <div className="bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4 group-hover:scale-105 transition-transform">
                  {b.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT BUSINESS CENTRAL PROVIDES */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-12">
            <span className="text-gray-600 text-sm font-semibold uppercase">
              Comprehensive Solution
            </span>
            <h2 className="mt-3 font-sans text-3xl md:text-4xl font-bold text-gray-900">
              What Business Central Provides
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
              Discover the powerful modules and capabilities that make Business
              Central a complete ERP solution for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessCentralModules.map((module, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="bg-gray-800 text-white w-14 h-14 flex items-center justify-center rounded-lg mb-4 group-hover:scale-110 group-hover:bg-gray-700 transition-all duration-300">
                  {module.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 bg-linear-to-b from-white to-gray-100">
        <div className="container mx-auto px-6 md:px-12 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gray-300/20 rounded-3xl blur-md"></div>
            <img
              src="/buss-central.webp"
              alt="Business Central Features"
              className="relative rounded-xl "
            />
          </div>

          <div className="space-y-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow hover:shadow-md transition-all border border-gray-200"
              >
                <div className="p-3 bg-gray-200 text-gray-700 rounded-lg">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {f.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{f.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Connect with our experts & discover how Business Central can elevate
          your business performance.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all">
              Get Consultation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BusinessCentralImplementation;
