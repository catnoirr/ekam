"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const CTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  const handleEnquiryClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center justify-between w-full max-w-3xl mx-auto py-8 bg-gradient-to-b from-white to-[#fafeff] sm:px-20">
      <button
        onClick={handleEnquiryClick}
        className="w-36"
      >
        <Image src="/about/Enquiry-GIF.gif" alt="Enquiry GIF" width={30} height={30} className="mx-auto"/>
        <p className="text-black mx-auto border-4 border-gray-400 mt-3">Enquiry Now</p>
      </button>
      <button
        onClick={handleWhatsAppClick}
        className="w-36"
      >
        <Image src="/about/whatsapp.png" alt="WhatsApp Icon" width={30} height={30} className="mx-auto" />
        <p className="text-black mx-auto border-4 border-gray-400 mt-3">WhatsApp Now</p>
      </button>
    </div>
  );
};

export default CTA;
