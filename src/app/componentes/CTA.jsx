"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const CTA = () => {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "1234567890";
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleEnquiryClick = () => {
    // Replace with your enquiry form link or scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full max-w-2xl mx-auto py-8">
      <button
        onClick={handleEnquiryClick}
        className="w-64 flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-3.5 rounded-3xl font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors duration-150 ease-in-out shadow-md"
      >
        <FontAwesomeIcon icon={faFileLines} className="w-5 h-5" />
        <span>Send Enquiry</span>
      </button>

      <button
        onClick={handleWhatsAppClick}
        className="w-64 flex items-center justify-center gap-3 bg-yellow-300 text-green-600 px-6 py-3.5 rounded-3xl font-medium border-2 border-yellow-300 hover:bg-green-50 active:bg-green-100 transition-colors duration-150 ease-in-out"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
        <span>WhatsApp Us</span>
      </button>
    </div>
  );
};

export default CTA;
