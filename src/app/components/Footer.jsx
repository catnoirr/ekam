import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import FloatingWhatsApp from "./FloatingWhatsApp";

const Footer = () => {
  return (
    <footer className="bg-[#fafeff] py-10 mt-10">
      <div className="mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
          <Image src="/logo.jpg" alt="Paytm" width={100} height={20} />
            
            <p className="text-gray-600 text-sm mt-2 c">
              At Ekam, we create impactful corporate gifting solutions that enhance brand identity, foster employee engagement, and build lasting relationships. With innovative and trend-driven ideas, we offer scalable, customizable, and globally accessible gifts designed to make a memorable impression.
            </p>
            <a href="#" className="text-red-500 mt-4 inline-block underline">SHOW ON MAP</a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-teal-400 w-max pb-1">COMPANY</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-teal-400 w-max pb-1">QUICK LINKS</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#">Track Your Order</a></li>
              <li><a href="#">Customisation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-teal-400 w-max pb-1">OUR POLICIES</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex justify-center items-end gap-2 mb-4">
            {[
              {
                Icon: FaInstagram,
                color:
                  "from-[#feda75] via-[#d62976] to-[#962fbf] bg-gradient-to-br ",
                link: "https://instagram.com",
              },
              {
                Icon: FaFacebookF,
                color: "from-blue-500 to-blue-700 bg-gradient-to-r",
                link: "https://facebook.com",
              },
              {
                Icon: FaLinkedinIn,
                color: "from-blue-700 to-blue-900 bg-gradient-to-r",
                link: "https://linkedin.com",
              },
              {
                Icon: FaYoutube,
                color: "from-red-500 to-red-700 bg-gradient-to-r",
                link: "https://youtube.com",
              },
            ].map(({ Icon, color, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white p-2 rounded-xl ${color} hover:scale-110 transition`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="mt-8 flex sm:flex-row flex-col items-end sm:gap-10">
            <div className="flex justify-center space-x-4 mt-3">
              <Image src="https://wemeestore.com/wp-content/uploads/2022/03/1-scaled.webp" alt="Paytm" width={350} height={20} />
            </div>
            <div className="flex justify-center space-x-4 mt-3">
            <Image src="https://wemeestore.com/wp-content/uploads/2022/03/2-scaled.webp" alt="Paytm" width={350} height={20} />
            </div>
          </div>
        </div>
      </div>
      <FloatingWhatsApp/>
    </footer>
  );
};

export default Footer;
