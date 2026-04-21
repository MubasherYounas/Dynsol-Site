import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
import { Link } from "react-router-dom";
import {
  Wrench,
  CheckCircle,
  Settings,
  Cpu,
  Layers,
  Code,
  Zap,
  Shield
} from "lucide-react";

function BusinessCentralCustomization() {
  const customizationServices = [
    {
      icon: <Settings size={28} />,
      title: "Workflow Customization",
      description: "Tailor Business Central to match your specific business processes and workflows."
    },
    {
      icon: <Code size={28} />,
      title: "Development & Extensions",
      description: "Custom AL code development and extensions to enhance functionality."
    },
    {
      icon: <Layers size={28} />,
      title: "UI/UX Customization",
      description: "Custom pages, reports, and dashboards for better user experience."
    },
    {
      icon: <Cpu size={28} />,
      title: "Integration Customization",
      description: "Connect Business Central with your existing systems and third-party apps."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* HERO */}
      <section className="relative w-full bg-linear-to-br from-gray-50 via-white to-gray-100 py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="max-w-3xl" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Wrench size={16} />
              Custom Solutions
            </div>

            <h1 className="font-sans font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
              <span className="text-gray-800">Business Central</span> Customization
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Tailor Dynamics 365 Business Central to fit your unique business needs. 
              Our expert customization services ensure your ERP works exactly how you want it to.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-all shadow">
                  Start Customization
                </button>
              </Link>

              <Link to="/services">
                <button className="px-8 py-3 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all">
                  View Examples
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION SERVICES */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-12">
            <span className="text-gray-600 text-sm font-semibold uppercase">
              Our Services
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-gray-900">
              Customization Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationServices.map((service, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4 group-hover:scale-105 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-sans text-3xl font-bold text-gray-900 mb-6">
                Why Customize Business Central?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-200 text-gray-700 p-2 rounded-lg mt-1">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Increased Efficiency</h3>
                    <p className="text-gray-600 text-sm">Streamline operations with workflows designed for your business.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-200 text-gray-700 p-2 rounded-lg mt-1">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Better Data Insights</h3>
                    <p className="text-gray-600 text-sm">Get customized reports and analytics tailored to your needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-200 text-gray-700 p-2 rounded-lg mt-1">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Future-Proof Solutions</h3>
                    <p className="text-gray-600 text-sm">Customizations that grow with your business and remain upgradable.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-2xl text-gray-900 mb-6">Our Approach</h3>
              <p className="text-gray-600 mb-6">
                We follow a structured process to ensure your customizations deliver maximum value while maintaining system integrity.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gray-700" size={20} />
                  <span className="text-gray-700">Requirement Analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gray-700" size={20} />
                  <span className="text-gray-700">Solution Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gray-700" size={20} />
                  <span className="text-gray-700">Development & Testing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-gray-700" size={20} />
                  <span className="text-gray-700">Deployment & Support</span>
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
            Ready to Customize Your Business Central?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can tailor Business Central to meet your specific business requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all">
                Get Custom Quote
              </button>
            </Link>

            {/* <Link to="/portfolio">
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                View Portfolio
              </button>
            </Link> */}
          </div>

          
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BusinessCentralCustomization;