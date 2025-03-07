import Image from "next/image";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 flex items-center bg-white px-3 py-2 rounded-full shadow-lg hover:shadow-xl transition-all"
    >
      <Image
        src="/whatsapp-icon.png" // Replace with your WhatsApp logo path
        alt="WhatsApp"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="ml-2 text-sm font-semibold text-gray-800">Need A Help?</span>
    </a>
  );
};

export default FloatingWhatsApp;