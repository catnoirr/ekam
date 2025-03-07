import Image from "next/image";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-32 flex items-center transition-all"
    >
      <Image
        src="/about/whatsapp.png"
        alt="WhatsApp"
        width={50}
        height={50}
        className="rounded-full"
      />
      <p className="ml-2 text-xs font-semibold text-gray-800 bg-white px-3 text-center py-1 -ms-20 rounded-full absolute w-28 -right-[100px]">Need A Help?</p>
    </a>
  );
};

export default FloatingWhatsApp;