"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import ModalDrawer from "./ModalDrawer";

const CTA = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleEnquiryClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <div className="absolute top-0 left-1/2 w-[1000px] h-[1000px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/2 w-[800px] h-[800px] bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Print Your Design?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with Ekam Graphics in your preferred way -  we are here to bring your ideas to life.
          </p>
        </div>

        {/* CTA Cards Container */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Enquiry Card */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faFileLines} className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Submit an Enquiry
                </h3>
                <p className="text-gray-600 mb-4">
                  Fill out our contact form and we'll get back to you quickly
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span className="mr-2">Get Started</span>
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div 
            onClick={handleWhatsAppClick}
            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  Chat on WhatsApp
                </h3>
                <p className="text-gray-600 mb-4">
                  Connect with us instantly for quick responses
                </p>
                <div className="flex items-center text-green-600 font-medium">
                  <span className="mr-2">Message Now</span>
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    className="w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalDrawer 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProduct={null}
      />
    </section>
  );
};

export default CTA;
