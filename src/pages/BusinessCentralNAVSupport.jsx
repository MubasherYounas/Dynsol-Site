import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
import { Link } from "react-router-dom";
import {
  Headphones,
  Clock,
  Shield,
  Wrench,
  Cloud,
  CheckCircle,
  MessageSquare,
  Phone,
  Mail,
  Database,
  RefreshCw
} from "lucide-react";

function BusinessCentralNAVSupport() {
  const supportServices = [
    {
      icon: <Headphones size={28} />,
      title: "24/7 Support Desk",
      description: "Round-the-clock technical assistance for all your Dynamics NAV issues."
    },
    {
      icon: <Wrench size={28} />,
      title: "System Maintenance",
      description: "Regular updates, patches, and performance optimization services."
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud Migration",
      description: "Seamless transition from on-premise NAV to cloud-based Business Central."
    },
    {
      icon: <Database size={28} />,
      title: "Data Management",
      description: "Backup, recovery, and data integrity services for your NAV system."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* HERO */}
      <section className="relative w-full bg-linear-to-br from-gray-50 via-white to-gray-100 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-2 md:px-6 xl:px-18 flex flex-col md:flex-row items-center gap-12">
          {/* LEFT */}
          <div className="flex-1" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Shield size={16} />
              Expert Support
            </div>

            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              <span className="text-gray-800">Dynamics NAV</span> Support Services
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Comprehensive support and maintenance for your Dynamics NAV system. 
              Keep your business running smoothly with our expert technical support.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <button className="px-8 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-all shadow">
                  Contact Support
                </button>
              </Link>

              <Link to="/services">
                <button className="px-8 py-3 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold hover:bg-gray-800 hover:text-white transition-all">
                  View Support Plans
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-8 bg-gray-300/20 rounded-3xl blur-xl"></div>
              {/* <div className="relative bg-linear-to-br from-gray-50 to-white p-10 rounded-2xl shadow border border-gray-200 max-w-xl">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mb-6">
                    <Clock size={20} />
                    <span className="font-semibold">24/7 Support Available</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-gray-700" size={20} />
                      <span className="text-gray-700">Emergency Response</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-gray-700" size={20} />
                      <span className="text-gray-700">System Monitoring</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-gray-700" size={20} />
                      <span className="text-gray-700">Regular Updates</span>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="lg:px-12 2xl:px-6 basis-[55%] md:basis-[45%] 2xl:basis-[52%] flex justify-center" data-aos="fade-right">
            <div
              className="relative flex items-center  justify-center"
              style={{
                height: "350px",
                width: "350px",
              }}
            >
               <img
              src="/nav_support.png"
              className="w-full h-full object-contain rounded-full"
              alt="Dynamics 365 Business Solutions"
            />
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT SERVICES */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-12">
            <span className="text-gray-600 text-sm font-semibold uppercase">
              Our Services
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-gray-900">
              Complete NAV Support Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-200"
                data-aos="flip-left"
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

      
      

      {/* CTA */}
      <section className="py-16 bg-gray-800 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Need Immediate Support?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Our technical support team is available 24/7 to help you resolve any Dynamics NAV issues.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all">
              Emergency Support
            </button>
          </Link>

          
        </div>

        
      </section>

      <Footer />
    </div>
  );
}
                        
export default BusinessCentralNAVSupport;