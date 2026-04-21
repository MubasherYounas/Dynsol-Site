import React from "react";
import Header from "../Components/layout/Header";
import Footer from "../Components/layout/Footer";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Cloud,
  RefreshCw,
  Zap,
  BarChart,
  Globe,
  ArrowUpRight,
  Clock,
  Target,
  Cpu,
  Database,
  ShieldCheck,
  Users,
  Server,
  ChevronRight,
  Award,
  Calendar,
  FileText,
  Headphones
} from "lucide-react";

function UpgradetoBusinessCentral() {
  const upgradeBenefits = [
    {
      icon: <Zap size={28} />,
      title: "Modern Interface",
      description: "Experience a beautiful, intuitive interface with improved user experience and productivity tools.",
      stat: "200,000+"
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud-First Platform",
      description: "Move to Microsoft's trusted cloud infrastructure with anytime, anywhere accessibility.",
      stat: "Cloud Ready"
    },
    {
      icon: <BarChart size={28} />,
      title: "Enhanced Analytics",
      description: "Advanced AI-powered insights, Power BI integration and real-time business intelligence.",
      stat: "2.7M+ Users"
    },
    {
      icon: <Globe size={28} />,
      title: "Global Scalability",
      description: "Scale effortlessly across locations with multi-currency, multi-language capabilities.",
      stat: "3,800+ Partners"
    }
  ];

  const upgradeProcess = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive analysis of your current system",
      icon: <Target size={24} />
    },
    {
      step: "02",
      title: "Planning",
      description: "Strategic roadmap for migration",
      icon: <Cpu size={24} />
    },
    {
      step: "03",
      title: "Migration",
      description: "Secure data transfer with zero downtime",
      icon: <Database size={24} />
    },
    {
      step: "04",
      title: "Testing",
      description: "Rigorous testing of all modules",
      icon: <ShieldCheck size={24} />
    },
    {
      step: "05",
      title: "Training",
      description: "Comprehensive user training",
      icon: <Users size={24} />
    },
    {
      step: "06",
      title: "Support",
      description: "24/7 post-upgrade support",
      icon: <Server size={24} />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full bg-linear-to-br from-gray-50 via-white to-gray-100 py-20 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gray-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 md:px-12 xl:px-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <RefreshCw size={16} />
                Upgrade Program
              </div>

              <h1 className="font-sans font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
                Upgrade to <span className="text-gray-800">Dynamics 365</span> Business Central
              </h1>

              <div className="mt-8 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Transform your legacy <span className="font-semibold text-gray-800">Dynamics NAV</span> system into a modern, 
                  cloud-powered solution with enhanced capabilities, AI-driven insights, and seamless integration. 
                  Experience <span className="font-semibold">minimal disruption</span> with our proven migration methodology.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="px-8 py-4 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 hover:shadow-lg transition-all shadow flex items-center gap-2">
                    Start Assessment
                    <ArrowUpRight size={20} />
                  </button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}

              <div className="relative fade-left rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="/videos/Home-bg-video.mp4"
                  title="Introduction to Business Central"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
          
          </div>
        </div>
      </section>

      {/* UPGRADE BENEFITS */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-12">
            <span className="text-gray-600 text-sm font-semibold uppercase">
              Why Upgrade Now
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-gray-900">
              The Next Generation of Business Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upgradeBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                <div className="absolute -top-3 left-6 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {benefit.stat}
                </div>
                <div className="bg-gray-800 text-white w-12 h-12 flex items-center justify-center rounded-lg mb-4 group-hover:scale-105 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPGRADE PROCESS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="text-center mb-12">
            <span className="text-gray-600 text-sm font-semibold uppercase">
              Our Process
            </span>
            <h2 className="mt-3 font-sans text-3xl font-bold text-gray-900">
              6-Step Upgrade Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upgradeProcess.map((step, index) => (
              <div 
                key={index}
                className="group bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-200 text-gray-800 text-xl font-bold px-3 py-1 rounded-lg">
                    {step.step}
                  </div>
                  <div className="bg-gray-300 text-gray-700 p-2 rounded-lg">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UPDATED SUPPORT SECTION - Simplified */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Headphones size={16} />
                Expert Support
              </div>
              
              <h2 className="font-sans text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Upgrade Services
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We provide complete upgrade support with comprehensive pre-upgrade assessments, 
                cost optimization strategies, and seamless migration from NAV/GP to Business Central—with options to move to the cloud.
              </p>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-lg">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Pre-Upgrade Assessment</h3>
                    <p className="text-gray-600">
                      Get a detailed analysis with actionable recommendations to reduce upgrade costs, 
                      optimize customizations, and identify AppSource solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* <Link to="/contact">
                <button className="px-8 py-4 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-all shadow w-full flex items-center justify-center gap-2">
                  <Award size={20} />
                  Get Free Assessment Report
                </button>
              </Link> */}
            </div>

            <div className="bg-white rounded-xl p-8 shadow">
              <h3 className="font-bold text-2xl mb-6 text-gray-900">Key Advantages</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <CheckCircle className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">All NAV Functionality + More</h4>
                    <p className="text-gray-600 text-sm">Includes 20+ years of trusted Dynamics NAV functionality with modern enhancements.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <CheckCircle className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Customization Review</h4>
                    <p className="text-gray-600 text-sm">Expert analysis of customizations to optimize for Business Central standards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <CheckCircle className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Cost-Effective Upgrade</h4>
                    <p className="text-gray-600 text-sm">Flexible licensing and implementation packages to fit your budget.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <CheckCircle className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Security Enhanced</h4>
                    <p className="text-gray-600 text-sm">Enterprise-grade security with automatic updates and compliance features.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE CTA SECTION */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-6 md:px-12 xl:px-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Business Central Upgrade?
            </h2>
            
            <p className="text-gray-300 text-lg mb-8">
              Book a free consultation and get a detailed upgrade roadmap with cost analysis and timeline.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  Book Consultation
                </button>
              </Link>

             
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default UpgradetoBusinessCentral;