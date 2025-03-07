import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-black">
              <span className="text-[#0099cc]">We</span><span className="text-red-600">Mee</span>
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              At WeMee, we create impactful corporate gifting solutions that enhance brand identity,
              foster employee engagement, and build lasting relationships.
            </p>
            <a href="#" className="text-red-500 font-semibold mt-2 inline-block">SHOW ON MAP</a>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-teal-400 w-max pb-1">COMPANY</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-teal-400 w-max pb-1">QUICK LINKS</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#">Track Your Order</a></li>
              <li><a href="#">Customisation</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-teal-400 w-max pb-1">OUR POLICIES</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-center space-x-4 mt-8">
          <a href="#" className="text-pink-500"><i className="fab fa-instagram text-2xl"></i></a>
          <a href="#" className="text-blue-600"><i className="fab fa-facebook text-2xl"></i></a>
          <a href="#" className="text-blue-500"><i className="fab fa-linkedin text-2xl"></i></a>
          <a href="#" className="text-red-500"><i className="fab fa-youtube text-2xl"></i></a>
        </div>

        {/* Payment and Courier Partners */}
        <div className="mt-8">
          <h4 className="text-center text-sm font-semibold">100% SECURE PAYMENT</h4>
          <div className="flex justify-center space-x-4 mt-3">
            <Image src="/paytm.png" alt="Paytm" width={50} height={20} />
            <Image src="/phonepe.png" alt="PhonePe" width={50} height={20} />
            <Image src="/razorpay.png" alt="Razorpay" width={50} height={20} />
            <Image src="/mastercard.png" alt="Mastercard" width={50} height={20} />
          </div>
          <h4 className="text-center text-sm font-semibold mt-6">OUR TRUSTED COURIER PARTNERS</h4>
          <div className="flex justify-center space-x-4 mt-3">
            <Image src="/bluedart.png" alt="Blue Dart" width={50} height={20} />
            <Image src="/xpressbees.png" alt="XpressBees" width={50} height={20} />
            <Image src="/dtdc.png" alt="DTDC" width={50} height={20} />
            <Image src="/fedex.png" alt="FedEx" width={50} height={20} />
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 flex items-center bg-white px-3 py-2 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <Image
          src="/whatsapp-icon.png"
          alt="WhatsApp"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="ml-2 text-sm font-semibold text-gray-800">Need A Help?</span>
      </a>
    </footer>
  );
};

export default Footer;
