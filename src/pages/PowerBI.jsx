import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Zap,
  Eye,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

function PowerBI() {
  const features = [
    {
      icon: <BarChart3 size={28} />,
      title: "Interactive Dashboards",
      description:
        "Create dynamic, interactive dashboards with real-time data visualization.",
    },
    {
      icon: <Eye size={28} />,
      title: "Data Insights",
      description:
        "Transform raw data into actionable insights with advanced analytics.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Predictive Analytics",
      description:
        "Forecast trends and make data-driven decisions with AI capabilities.",
    },
    {
      icon: <Users size={28} />,
      title: "Collaborative Reports",
      description:
        "Share insights across your organization with secure, collaborative reporting.",
    },
  ];

  const integrationBenefits = [
    "Seamless Dynamics 365 Integration",
    "Real-time Business Central Data",
    "Automated Report Generation",
    "Mobile Access to Dashboards",
    "Custom Data Connectors",
    "Enterprise Security",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* HERO */}
      <section className="relative w-full bg-linear-to-br from-gray-50 via-white to-gray-100 py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <BarChart3 size={16} />
                Business Intelligence
              </div>

              <h1 className="font-sans font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
                <span className="text-gray-800">Microsoft</span> Power BI
                Solutions
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                Transform your business data into actionable insights with
                Microsoft Power BI. Create interactive dashboards, generate
                detailed reports, and make data-driven decisions.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-all shadow flex items-center gap-2">
                    Get Started
                    <ArrowRight size={20} />
                  </button>
                </Link>
              </div>
            </div>

            {/* POWER BI IMAGE */}
            <div className="relative max-w-sm mx-auto" data-aos="fade-left">
              {/* Card */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                  <img
                    src="/Powerbi.png"
                    alt="Power BI Logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MICROSOFT LOGOS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <p className="mt-3 font-sans text-3xl font-bold text-gray-900">
              Part of the Microsoft Ecosystem
            </p>
          </div>

          {/* Icons Row */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {/* Microsoft Office Logo */}
            <div className="flex flex-col items-center">
              <img
                src="/office365.png"
                alt="Office 365 Logo"
                className="h-32 w-auto object-contain"
              />
              <span className="text-gray-700 text-lg font-semibold mt-3">
                Office 365
              </span>
            </div>

            {/* Dynamics 365 Logo */}
            <div className="flex flex-col items-center">
              <img
                src="/dynamics.webp"
                alt="Dynamics Logo"
                className="h-32 w-auto object-contain"
              />
              <span className="text-gray-700 text-lg font-semibold mt-3">
                Dynamics 365
              </span>
            </div>

            {/* Azure Logo */}
            <div className="flex flex-col items-center">
              <img
                src="/Azure.png"
                alt="Azure Logo"
                className="h-32 w-auto object-contain"
              />
              <span className="text-gray-700 text-lg font-semibold mt-3">
                Azure Cloud
              </span>
            </div>

            {/* Teams Logo */}
            <div className="flex flex-col items-center">
              <img
                src="/team.png"
                alt="Teams Logo"
                className="h-32 w-auto object-contain"
              />
              <span className="text-gray-700 text-lg font-semibold mt-3">
                Teams
              </span>
            </div>

            {/* SharePoint Logo */}
            <div className="flex flex-col items-center">
              <img
                src="/msshare.webp"
                alt="SharePoint Logo"
                className="h-32 w-auto object-contain"
              />
              <span className="text-gray-700 text-lg font-semibold mt-3">
                SharePoint Portal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-12">
            <span className="text-gray-600 text-sm font-semibold uppercase" data-aos="fade-up">
              Key Features
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="100">
              Powerful Business Intelligence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-200"
                data-aos="flip-left"
                data-aos-delay={i * 100}
              >
                <div className="bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4 group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATION BENEFITS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans text-3xl font-bold text-gray-900 mb-6">
                Seamless Integration with Your Systems
              </h2>

              <p className="text-gray-600 mb-8">
                Power BI integrates effortlessly with your existing Microsoft
                ecosystem and business applications, providing a unified view of
                your business performance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrationBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-gray-700" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-800 text-white p-3 rounded-lg">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Bank-grade security for your business data
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700">Data Encryption</span>
                  <CheckCircle className="text-gray-700" size={20} />
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700">Role-Based Access</span>
                  <CheckCircle className="text-gray-700" size={20} />
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700">Compliance Standards</span>
                  <CheckCircle className="text-gray-700" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-center text-white">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Power BI Journey Today
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Transform your data into insights that drive business growth and
            informed decision-making.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Zap size={20} />
                Get Implementation Quote
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PowerBI;
